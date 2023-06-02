const Gallery = () => {
  const images = [
    {
      id: crypto.randomUUID(),
      url: "https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt378913a9586a312e/624742cdc6d11125f3c9aef5/cinematic_render_2.jpg",
    },
    {
      id: crypto.randomUUID(),
      url: "https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt264d9e87a461a996/624743d7da5a7125ed751d50/cinematic_render_1.jpg",
    },
    {
      id: crypto.randomUUID(),
      url: "https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt256d059cbf2a03b8/624742b7a8b3c644a288f1aa/cinematic_render_3.jpg",
    },
    {
      id: crypto.randomUUID(),
      url: "https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt9612f8c5c4121dd5/62474293da5a7125ed751d4e/cinematic_render_4.jpg",
    },
    {
      id: crypto.randomUUID(),
      url: "https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt0016787af5985873/6247457bac712c24bbaef411/screenshot_garden.jpg",
    },
    {
      id: crypto.randomUUID(),
      url: "https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt6797783a8e9a2724/6247457bc6d11125f3c9aef9/screenshot_titan.jpg",
    },
    {
      id: crypto.randomUUID(),
      url: "https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/bltb93ef73fc7894581/62474442da5a7125ed751d52/screenshot_tuskarr_lake.jpg",
    },
    {
      id: crypto.randomUUID(),
      url: "https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt4e25dfb9cb0a8277/6247457c0f303644adfe5e18/screenshot_ruins.jpg",
    },
    {
      id: crypto.randomUUID(),
      url: "https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt4a164f15fa02097a/6247457cf15a7f436ba44de0/screenshot_elemental.jpg",
    },
    {
      id: crypto.randomUUID(),
      url: "https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt4f890a7229b3e32b/6247453e5e831c436d424c15/screenshot_magma.jpg",
    },
  ];

  return (
    <>
      <h2>Welcome to the Gallery</h2>
      {images.map((image) => (
        <img
          key={image.id}
          src={image.url}
          alt="World of Warcraft"
          width="1080"
          height="700"
        />
      ))}
    </>
  );
};

export default Gallery;
