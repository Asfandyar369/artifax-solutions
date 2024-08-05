import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  constructor(
    private router: Router,
    private meta: Meta,
    private titleService: Title
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const routerMetaData = this.router.routerState.snapshot.root.firstChild?.data;
        if (routerMetaData) {
          this.setPageMetaTags(routerMetaData);
        }
      });
  }

  private setPageMetaTags(metaTags: MetaDefinition): void {
    // Extract title and remove it from the meta tags if provided
    const { title, ...otherMetaTags } = metaTags;

    // Set the page title if specified
    if (title) {
      this.titleService.setTitle(title);
    }

    // Update other meta tags
    Object.keys(otherMetaTags).forEach((key) => {
      if (key === 'canonical') {
        // Handle canonical links separately
        this.setCanonicalLink(otherMetaTags[key]);
      } else {
        const existingTag = this.meta.getTag(`name='${key}'`) || this.meta.getTag(`property='${key}'`);
        if (existingTag) {
          if (existingTag.content !== otherMetaTags[key]) {
            this.meta.updateTag({ name: key, content: otherMetaTags[key] });
          }
        } else {
          this.meta.addTag({ name: key, content: otherMetaTags[key] });
        }
      }
    });
  }

  private setCanonicalLink(url?: string) {
    if (!url) return;
    let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']") || null;
    if (link) {
      link.href = url;
    } else {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      document.head.appendChild(link);
    }
  }
}
