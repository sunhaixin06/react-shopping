//
//  Util.h
//  WebviewDemo
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

@interface Util : NSObject
+ (NSDictionary *)dictionaryWithJsonString:(NSString *)jsonString;
+(UIViewController *)getCurrentVC;
@end
