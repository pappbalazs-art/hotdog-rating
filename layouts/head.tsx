import React from "react";
import NextHead from "next/head";

import { siteConfig } from "@/config/site";

export const Head = () => {
	return (
		<NextHead>
			<title>{siteConfig.name}</title>
			<meta property="og:title" key="title" content={siteConfig.name} />
			<meta property="og:description" content={siteConfig.description} />
			<meta name="description" content={siteConfig.description} />
			<meta
				name="viewport"
				key="viewport"
				content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
			/>
			<meta name="apple-mobile-web-app-title" content="Hot-Dog Randi" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta
				name="apple-mobile-web-app-status-bar-style"
				content="default"
			/>
			<link rel="icon" href="/favicon.ico" />
			<link
				rel="apple-touch-icon"
				sizes="72x72"
				href="/media/icon-72.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="96x96"
				href="/media/icon-96.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="144x144"
				href="/media/icon-144.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="168x168"
				href="/media/icon-168.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/media/icon-180.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="192x192"
				href="/media/icon-192.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="256x256"
				href="/media/icon-256.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="512x512"
				href="/media/icon-512.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
				href="/media/12.9__iPad_Pro_portrait.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
				href="/media/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
				href="/media/10.2__iPad_landscape.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
				href="/media/iPhone_16_Pro_landscape.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
				href="/media/11__iPad_Pro__10.5__iPad_Pro_portrait.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
				href="/media/iPhone_16_Pro_Max_landscape.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 1032px) and (device-height: 1376px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
				href="/media/13__iPad_Pro_M4_landscape.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
				href="/media/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
				href="/media/11__iPad_Pro__10.5__iPad_Pro_landscape.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
				href="/media/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 834px) and (device-height: 1210px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
				href="/media/11__iPad_Pro_M4_portrait.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
				href="/media/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
				href="/media/iPhone_16__iPhone_15_Pro__iPhone_15__iPhone_14_Pro_portrait.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
				href="/media/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
				href="/media/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
				href="/media/10.2__iPad_portrait.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
				href="/media/10.9__iPad_Air_landscape.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
				href="/media/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
				href="/media/iPhone_16_Pro_portrait.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
				href="/media/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 1032px) and (device-height: 1376px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
				href="/media/13__iPad_Pro_M4_portrait.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
				href="/media/iPhone_11__iPhone_XR_portrait.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
				href="/media/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
				href="/media/10.5__iPad_Air_portrait.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
				href="/media/iPhone_16_Plus__iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_portrait.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
				href="/media/8.3__iPad_Mini_landscape.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
				href="/media/12.9__iPad_Pro_landscape.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 834px) and (device-height: 1210px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
				href="/media/11__iPad_Pro_M4_landscape.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
				href="/media/iPhone_16__iPhone_15_Pro__iPhone_15__iPhone_14_Pro_landscape.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
				href="/media/iPhone_16_Plus__iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_landscape.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
				href="/media/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
				href="/media/8.3__iPad_Mini_portrait.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
				href="/media/10.5__iPad_Air_landscape.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
				href="/media/iPhone_16_Pro_Max_portrait.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
				href="/media/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
				href="/media/iPhone_11__iPhone_XR_landscape.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
				href="/media/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
				href="/media/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
				href="/media/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
				href="/media/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
				href="/media/10.9__iPad_Air_portrait.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
				href="/media/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png"
			/>
			<link rel="manifest" href="/manifest.json" />
		</NextHead>
	);
};
