package com.hello.ImageLib;

import androidx.annotation.NonNull;

import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.image.ImageResizeMode;
import com.facebook.react.views.image.ReactImageView;

import java.util.Map;

public class ReactImageManager extends SimpleViewManager<ReactImageView> {
    public static final String REACT_CLASS = "RCTImageView1";
    ReactApplicationContext mCallerContext;

    @NonNull
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @NonNull
    @Override
    protected ReactImageView createViewInstance(@NonNull ThemedReactContext reactContext) {
        return new ReactImageView(reactContext, Fresco.newDraweeControllerBuilder(),null, mCallerContext);
    }

    @ReactProp(name = "src")
    public void setSrc(ReactImageView view, ReadableArray sources){
        view.setSource(sources);
    }

    @ReactProp(name = "borderRadius", defaultFloat = 0f)
    public void setBorderRadius(ReactImageView view, float borderRadius){
        view.setBorderRadius(borderRadius);
    }

    @ReactProp(name = ViewProps.RESIZE_MODE)
    public void setResizeMode(ReactImageView view, String resizeMode){
        view.setScaleType(ImageResizeMode.toScaleType(resizeMode));
    }

public Map getExportedCustomBubblingEventTypeConstants(){
        return MapBuilder.builder().put("topChange", MapBuilder.of("phasedRegistrationNames",
                MapBuilder.of("bubbled", "onChange"))).build();
}
}
