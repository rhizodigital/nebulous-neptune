class ShareButton {
  static selector() {
    return "[data-share-on]";
  }
  constructor(node) {
    this.node = node;
    this.network = this.node.dataset.shareOn;
    this.bindEvents();
  }

  get networkURL() {
    const postUrl = encodeURIComponent(window.location.href);
    switch (this.node.dataset.shareOn) {
      case "facebook":
        return `https://www.facebook.com/sharer/sharer.php?u=${postUrl}`;
      case "twitter":
        return `https://twitter.com/intent/tweet?url=${postUrl}`;
      case "linkedin":
        return `https://www.linkedin.com/shareArticle?mini=true&url=${postUrl}`;
      default:
        return "Unknown";
    }
  }

  handleClick() {
    window.open(this.networkURL, "_blank");
  }

  bindEvents() {
    this.node.addEventListener("click", this.handleClick.bind(this));
  }
}

export default ShareButton;
