import { observable, action } from "mobx";

class LinksStore {
  @observable links: { label: string; imgSrc: string }[] = [];

  @action
  setLinks(newLinks: { label: string; imgSrc: string }[]) {
    this.links = newLinks;
  }
}

export default new LinksStore();
