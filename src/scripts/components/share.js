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
    const width = 575;
    const height = 400;
    const left = window.innerWidth / 2 - width / 2 + window.screenX;
    const top = window.innerHeight / 2 - height / 2 + window.screenY;
    const opts = `popup,width=${width},height=${height},top=${top},left=${left}`;
    window.open(this.networkURL, "share", opts);
  }

  bindEvents() {
    this.node.addEventListener("click", this.handleClick.bind(this));
  }
}

export default ShareButton;
