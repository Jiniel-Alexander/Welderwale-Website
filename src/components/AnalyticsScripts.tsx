import Script from 'next/script';
import { getIntegrations } from '@/lib/db';

export default async function AnalyticsScripts() {
  const cfg = await getIntegrations();

  return (
    <>
      {/* Google Search Console Meta Verification */}
      {cfg.gscVerification && (
        <meta name="google-site-verification" content={cfg.gscVerification} />
      )}

      {/* Google Tag Manager (Head) */}
      {cfg.gtmEnabled && cfg.gtmId && (
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${cfg.gtmId}');
          `}
        </Script>
      )}

      {/* Google Analytics 4 (gtag.js) */}
      {cfg.ga4Enabled && cfg.ga4Id && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${cfg.ga4Id}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics-ga4" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${cfg.ga4Id}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      {/* Microsoft Clarity (Heatmaps & Session Recordings) */}
      {cfg.clarityEnabled && cfg.clarityId && (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${cfg.clarityId}");
          `}
        </Script>
      )}

      {/* Meta (Facebook) Pixel */}
      {cfg.metaPixelEnabled && cfg.metaPixelId && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${cfg.metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
