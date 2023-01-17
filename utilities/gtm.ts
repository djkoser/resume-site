export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GTAG_MGR_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageView = (url: string) => {
  (window as unknown as { gtag: (...param: any) => void }).gtag(
    "config",
    GA_TRACKING_ID,
    {
      page_path: url,
    }
  );
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event: (param: {
  action: string;
  category?: string;
  label?: string;
  value?: string;
}) => void = ({ action, category, label, value }) => {
  (window as unknown as { gtag: (...param: any) => void }).gtag(
    "event",
    action,
    {
      event_category: category,
      event_label: label,
      value: value,
    }
  );
};

export const sendResumeConversion = () => {
  event({
    action: "open_resume",
    category: "Conversions",
    label: "Open Resume Link",
  });
};
export const sendBkydRestoAmplifyConversion = () => {
  event({
    action: "open_bkyd_resto_amplify",
    category: "Conversions",
    label: "Open Resume Link",
  });
};
export const sendBkydRestoConversion = () => {
  event({
    action: "open__bkyd_resto",
    category: "Conversions",
    label: "Open Resume Link",
  });
};
export const sendSaviConversion = () => {
  event({
    action: "open_savi_squirrel",
    category: "Conversions",
    label: "Open Resume Link",
  });
};
export const sendTTGConversion = () => {
  event({
    action: "open_ttg",
    category: "Conversions",
    label: "Open Resume Link",
  });
};

export const sendGitHubBkydRestoAmplifyConversion = () => {
  event({
    action: "open_bkyd_resto_amplify_github",
    category: "Conversions",
    label: "Open Resume Link",
  });
};
export const sendGitHubBkydRestoConversion = () => {
  event({
    action: "open__bkyd_resto_github",
    category: "Conversions",
    label: "Open Resume Link",
  });
};
export const sendGitHubSaviConversion = () => {
  event({
    action: "open_savi_squirrel_github",
    category: "Conversions",
    label: "Open Resume Link",
  });
};
export const sendGitHubTTGConversion = () => {
  event({
    action: "open_ttg_github",
    category: "Conversions",
    label: "Open Resume Link",
  });
};

export const sendHomeEvent = () => {
  event({
    action: "nav_to_home",
    category: "Navigation",
    label: "Navigate to Home Section",
  });
};
export const sendContactEvent = () => {
  event({
    action: "nav_to_contact",
    category: "Navigation",
    label: "Navigate to Contact Section",
  });
};
export const sendAboutMeEvent = () => {
  event({
    action: "nav_to_about_me",
    category: "Navigation",
    label: "Navigate to About Me Section",
  });
};
export const sendResumeEvent = () => {
  event({
    action: "nav_to_resume",
    category: "Navigation",
    label: "Navigate to Resume Section",
  });
};
export const sendPortfolioEvent = () => {
  event({
    action: "nav_to_portfolio",
    category: "Navigation",
    label: "Navigate to Portfolio Section",
  });
};
