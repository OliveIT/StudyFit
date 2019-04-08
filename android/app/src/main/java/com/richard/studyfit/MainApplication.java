package com.richard.studyfit;

import android.app.Application;

import com.facebook.react.ReactApplication;
import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.auth.RNFirebaseAuthPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import android.content.Context;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.util.Log;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication, SensorEventListener {

  private SensorManager mSensorManager;
  private Sensor mStepSensor;

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNFirebasePackage(),
            new RNFirebaseAuthPackage(),
            new RNGestureHandlerPackage(),
            new VectorIconsPackage(),
            new StepCounterPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);

    mSensorManager = (SensorManager) this.getSystemService(Context.SENSOR_SERVICE);
    mStepSensor = mSensorManager.getDefaultSensor(Sensor.TYPE_ACCELEROMETER);
    mSensorManager.registerListener(this, mStepSensor, SensorManager.SENSOR_DELAY_FASTEST);
  }


  @Override
  public void onAccuracyChanged(Sensor sensor, int i) {}

  @Override
  public void onSensorChanged(SensorEvent event) {

    if (event.sensor.getType() == Sensor.TYPE_ACCELEROMETER) {
      updateAccel( event.timestamp, event.values[0], event.values[1], event.values[2]);
    }
  }

  private static final int ACCEL_RING_SIZE = 50;
  private static final int VEL_RING_SIZE = 10;

  // change this threshold according to your sensitivity preferences
  private static final float STEP_THRESHOLD = 30f;        //leoruzin original value is 85

  private static final int STEP_DELAY_NS = 250000000;

  private int accelRingCounter = 0;
  private float[] accelRingX = new float[ACCEL_RING_SIZE];
  private float[] accelRingY = new float[ACCEL_RING_SIZE];
  private float[] accelRingZ = new float[ACCEL_RING_SIZE];
  private int velRingCounter = 0;
  private float[] velRing = new float[VEL_RING_SIZE];
  private long lastStepTimeNs = 0;
  private float oldVelocityEstimate = 0;

  public void updateAccel(long timeNs, float x, float y, float z) {
    float[] currentAccel = new float[3];
    currentAccel[0] = x;
    currentAccel[1] = y;
    currentAccel[2] = z;

    // First step is to update our guess of where the global z vector is.
    accelRingCounter++;
    accelRingX[accelRingCounter % ACCEL_RING_SIZE] = currentAccel[0];
    accelRingY[accelRingCounter % ACCEL_RING_SIZE] = currentAccel[1];
    accelRingZ[accelRingCounter % ACCEL_RING_SIZE] = currentAccel[2];

    float[] worldZ = new float[3];
    worldZ[0] = SensorFilter.sum(accelRingX) / Math.min(accelRingCounter, ACCEL_RING_SIZE);
    worldZ[1] = SensorFilter.sum(accelRingY) / Math.min(accelRingCounter, ACCEL_RING_SIZE);
    worldZ[2] = SensorFilter.sum(accelRingZ) / Math.min(accelRingCounter, ACCEL_RING_SIZE);

    float normalization_factor = SensorFilter.norm(worldZ);

    worldZ[0] = worldZ[0] / normalization_factor;
    worldZ[1] = worldZ[1] / normalization_factor;
    worldZ[2] = worldZ[2] / normalization_factor;

    float currentZ = SensorFilter.dot(worldZ, currentAccel) - normalization_factor;
    velRingCounter++;
    velRing[velRingCounter % VEL_RING_SIZE] = currentZ;

    float velocityEstimate = SensorFilter.sum(velRing);

    if (velocityEstimate > STEP_THRESHOLD && oldVelocityEstimate <= STEP_THRESHOLD
            && (timeNs - lastStepTimeNs > STEP_DELAY_NS)) {
      onStep();
      lastStepTimeNs = timeNs;
    }
    oldVelocityEstimate = velocityEstimate;
  }


  private void onStep() {
    if (StepCounterModule.instance != null)
      StepCounterModule.instance.onStep();
  }
}
