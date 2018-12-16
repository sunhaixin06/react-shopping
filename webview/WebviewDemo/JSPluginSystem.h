//
//  JSPluginSystem.h
//  WebviewDemo
//

#import <Foundation/Foundation.h>
#import <WebKit/WebKit.h>

@interface JSPluginSystem : NSObject
-(void) dealWithJSAPI:(NSURL *)url webview:(WKWebView *)webview;
@property(nonatomic,strong) WKWebView *webView;
@end
