package com.richard.studyfit;

import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.IBinder;
import android.os.Build;
import android.util.Log;
import android.os.Binder;
import android.content.pm.PackageManager;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;


import java.util.Map;
import java.util.HashMap;

public class StepCounterModule extends ReactContextBaseJavaModule {
  private final String TAG = "StepCounterModule";

  public ReactApplicationContext m_reactContext = null;

  public static StepCounterModule instance = null;

  public StepCounterModule(ReactApplicationContext reactContext) {
    super(reactContext);

    m_reactContext = reactContext;
    instance = this;
  }

  @Override
  public String getName() {
    return "StepCounter";
  }

  @Override
  public Map<String, Object> getConstants() {
    final Map<String, Object> constants = new HashMap<>();
    return constants;
  }

  private void sendEvent(ReactContext reactContext,
                       String eventName,
                       WritableMap params) {
      reactContext
        .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
        .emit(eventName, params);
  }

  public void onStep() {
    WritableMap params = Arguments.createMap();
//    params.putInt("STEP", StepService.m_customPreference.getStepCount());

    sendEvent(m_reactContext, "onChangeStepCounts", params);
  }
  
  @ReactMethod
  public void NativeLog(String tag, String log) {
    Log.e(tag, log);
  }
}
