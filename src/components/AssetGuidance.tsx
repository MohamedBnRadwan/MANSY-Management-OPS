import { imageAssets } from "@/content/site";

export function AssetGuidance() {
  return (
    <section className="section section--mist">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Image sourcing guide</p>
          <h2>Download these image files into public/assets/images.</h2>
          <p>
            Use Unsplash or Pexels, choose clean architectural photography, and rename the files exactly as listed.
          </p>
        </div>
        <div className="asset-table" role="table" aria-label="Recommended image filenames and search queries">
          <div className="asset-table__row asset-table__row--head" role="row">
            <span role="columnheader">Page</span>
            <span role="columnheader">Filename</span>
            <span role="columnheader">Search queries</span>
          </div>
          {imageAssets.map((asset) => (
            <div className="asset-table__row" role="row" key={asset.file}>
              <span role="cell">{asset.page}</span>
              <code role="cell">{asset.file}</code>
              <span role="cell">{asset.queries.join(" | ")}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
