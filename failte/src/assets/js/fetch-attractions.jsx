export const url = `https://failteireland.azure-api.net/opendata-api/v2/attractions?subscription-key=${
  import.meta.env.VITE_FAILTE_IRE_KEY
}`;

export async function fetchData(url) {
  let nextLink = true;
  let fullDataSet = [];
  while (nextLink) {
    const response = await fetch(url, {
      headers: {
        "Cache-control": "public, max-age=3600",
        Pragma: "",
      },
    });
    const data = await response.json();
    nextLink = data["@odata.nextLink"];
    url = nextLink + `&subscription-key=${import.meta.env.VITE_FAILTE_IRE_KEY}`;
    fullDataSet = fullDataSet.concat(data.value);
  }
  console.log("data fetched!");
  return fullDataSet;
}
