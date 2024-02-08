import ShareButton from "./components/share";
const shareButtons = document.querySelectorAll(ShareButton.selector());
shareButtons.forEach((button) => new ShareButton(button));
