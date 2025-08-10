import React, { FC } from "react";

type IframeMapProps = {
  // e.g. "https://www.google.com/maps/embed?…"
  embedUrl: string;
  width?: string;
  height?: string;
};

export const GoogleMapIframe: FC<IframeMapProps> = ({
  embedUrl,
  width = "100%",
  height = "400px",
}) => (
  <div style={{ width, height, overflow: "hidden" }}>
    <iframe
      src={embedUrl}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      aria-label="Google map location"
    />
  </div>
);
export default GoogleMapIframe;
