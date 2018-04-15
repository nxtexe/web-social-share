import {Component, Event, EventEmitter, Prop} from '@stencil/core';

import {WebSocialShareFacebook} from '../../utils/web-social-share/web-social-share-facebook';
import {WebSocialShareInput} from '../../types/web-social-share/web-social-share-input';
import {WebSocialShareTwitter} from '../../utils/web-social-share/web-social-share-twitter';
import {WebSocialShareEmail} from '../../utils/web-social-share/web-social-share-email';
import {WebSocialShareLinkedin} from '../../utils/web-social-share/web-social-share-linkedin';
import {WebSocialSharePinterest} from '../../utils/web-social-share/web-social-share-pinterest';
import {WebSocialShareReddit} from '../../utils/web-social-share/web-social-share-reddit';
import {WebSocialShareDisplayAttributes} from '../../types/web-social-share/web-social-share-attributes';

@Component({
  tag: 'web-social-share-target',
  styleUrl: 'web-social-share-target.scss'
})
export class WebSocialShareTarget {

  @Prop() share: WebSocialShareInput;

  @Event() selected: EventEmitter;

  private handleFacebookShare() {
    WebSocialShareFacebook.share(this.share.facebook);
    this.selected.emit();
  }

  private handleTwitterShare() {
    WebSocialShareTwitter.share(this.share.twitter);
    this.selected.emit();
  }

  private handleEmailShare() {
    WebSocialShareEmail.share(this.share.email);
    this.selected.emit();
  }

  private handleLinkedinShare() {
    WebSocialShareLinkedin.share(this.share.linkedin);
    this.selected.emit();
  }

  private handlePinterestShare() {
    WebSocialSharePinterest.share(this.share.pinterest);
    this.selected.emit();
  }

  private handleRedditShare() {
    WebSocialShareReddit.share(this.share.reddit);
    this.selected.emit();
  }

  render() {
    if (this.share.facebook) {
      return (
        <button onClick={() => this.handleFacebookShare()}>
          {this.renderIcon(this.share.facebook)}
          <p>Facebook</p>
        </button>
      );
    } else if (this.share.twitter) {
      return (
        <button onClick={() => this.handleTwitterShare()}>
          {this.renderIcon(this.share.twitter)}
          <p>Twitter</p>
        </button>
      );
    } else if (this.share.email) {
      return (
        <button onClick={() => this.handleEmailShare()}>
          {this.renderIcon(this.share.email)}
          <p>Email</p>
        </button>
      );
    } else if (this.share.linkedin) {
      return (
        <button onClick={() => this.handleLinkedinShare()}>
          {this.renderIcon(this.share.linkedin)}
          <p>LinkedIn</p>
        </button>
      );
    } else if (this.share.pinterest) {
      return (
        <button onClick={() => this.handlePinterestShare()}>
          {this.renderIcon(this.share.pinterest)}
          <p>Pinterest</p>
        </button>
      );
    } else if (this.share.reddit) {
      return (
        <button onClick={() => this.handleRedditShare()}>
          {this.renderIcon(this.share.reddit)}
          <p>Reddit</p>
        </button>
      );
    } else {
      return (
        <div></div>
      )
    }

  }

  private renderIcon(displayAttributes: WebSocialShareDisplayAttributes) {
    if (displayAttributes.iconStyleclass && displayAttributes.iconStyleclass !== '') {
      return (
        <i class={displayAttributes.iconStyleclass}></i>
      );
    } else {
      return (
        <span></span>
      );
    }
  }

  }
