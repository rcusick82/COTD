export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function getFunName() {
  const adjectives = [
    "red",
    "blue",
    "coral",
    "pink",
    "green",
    "yellow",
    "black",
    "white",
    "gray",
    "magenta",
    "sky blue",
    "navy blue",
    "neon",
    "checkered",
    "spotted",
    "polka dot",
    "brown",
    "tan",
    "orange",
    "burnt orange",
    "cherry red",
    "purple",
    "chartreuss",
    "sage",
    "hunter green",
    "honalulu blue",
    "chrome",
    "silver",
    "gold",
    "copper",
    "bronze",
    "plaid",
    "eggshell",
    "cream",
    "mocha",
    "school bus yellow"
  ];

  const nouns = [
    "bass",
    "trout",
    "minnow",
    "shark",
    "dolphin",
    "sting ray",
    "humpback whale",
    "sperm whale",
    "seal",
    "lobester",
    "shrimp",
    "clams",
    "oysters",
    "scallops",
    "starfish",
    "marlin",
    "swordfish",
    "clownfish",
    "octopus",
    "eel",
    "lionfish",
    "hammerhead shark",
    "great white shark",
    "sand shark",
    "bull shark",
    "jellyfish",
    "plankton",
    "snow crabs",
    "king crabs",
    "blue crabs"
  ];

  return `${rando(adjectives)}-${rando(nouns)}`;
}
