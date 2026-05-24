import { imageAssets } from "@/content/site";

export function AssetGuidance() {
  return (
    <section className="section section--mist">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Image sourcing guide</p>
          <h2>Download these image and video files into public/assets.</h2>
          <p>
            Use the listed source site, choose clean commercial visuals, and rename the files exactly as listed.
          </p>
        </div>
        <div className="asset-table" role="table" aria-label="Recommended image filenames and search queries">
          <div className="asset-table__row asset-table__row--head" role="row">
            <span role="columnheader">Page</span>
            <span role="columnheader">Filename</span>
            <span role="columnheader">Source</span>
            <span role="columnheader">Search queries</span>
          </div>
          {imageAssets.map((asset) => (
            <div className="asset-table__row" role="row" key={asset.file}>
              <span className="asset-table__cell" role="cell">
                <strong className="asset-table__label">Page</strong>
                <span>{asset.page}</span>
              </span>
              <span className="asset-table__cell" role="cell">
                <strong className="asset-table__label">Filename</strong>
                <code>{asset.file}</code>
              </span>
              <span className="asset-table__cell" role="cell">
                <strong className="asset-table__label">Source</strong>
                <span>{asset.source}</span>
              </span>
              <span className="asset-table__cell" role="cell">
                <strong className="asset-table__label">Search queries</strong>
                <span>{asset.queries.join(" | ")}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
