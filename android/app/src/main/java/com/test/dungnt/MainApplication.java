package com.test.dungnt;

import android.app.Application;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.swmansion.reanimated.ReanimatedPackage;
import com.th3rdwave.safeareacontext.SafeAreaContextPackage;
import com.airbnb.android.react.lottie.LottiePackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.horcrux.svg.SvgPackage;
import com.reactcommunity.rndatetimepicker.RNDateTimePickerPackage;
import java.util.Arrays;
import java.util.List;
import androidx.multidex.MultiDexApplication;
import com.agontuk.RNFusedLocation.RNFusedLocationPackage;
import com.microsoft.codepush.react.CodePush;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import io.xogus.reactnative.versioncheck.RNVersionCheckPackage;  // <--- HERE
import io.invertase.firebase.app.ReactNativeFirebaseAppPackage;
import io.invertase.firebase.messaging.ReactNativeFirebaseMessagingPackage;
import com.rt2zz.reactnativecontacts.ReactNativeContacts;
import cl.json.RNSharePackage;
import cl.json.ShareApplication;
import com.dylanvann.fastimage.FastImageViewPackage;

public class MainApplication extends MultiDexApplication implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new ReanimatedPackage(),
                    new VectorIconsPackage(),
                    new RNGestureHandlerPackage(),
                    new AsyncStoragePackage(),
                    new SafeAreaContextPackage(),
                    new LottiePackage(),
                    new LinearGradientPackage(),
                    new SvgPackage(),
                    new RNDateTimePickerPackage(),
                    new RNFusedLocationPackage(),
                    new RNCWebViewPackage(),
                    new RNVersionCheckPackage(),
                    new ReactNativeFirebaseMessagingPackage(),
                    new ReactNativeFirebaseAppPackage(),
                    new ReactNativeContacts(),
                    new RNSharePackage(),
                    new FastImageViewPackage(),
                    new CodePush(getResources().getString(R.string.CodePushDeploymentKey), getApplicationContext(), BuildConfig.DEBUG)
            );
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
         @Override
        protected String getJSBundleFile() {
            return CodePush.getJSBundleFile();
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
    }
}
