import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogHubItem, BlogHubSection } from '../../../../interface/BlogHubSection';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-blog-hub-section',
  standalone: true,
  imports: [NgbModule, NgIf, NgFor, RouterModule],
  templateUrl: './blog-hub-section.component.html',
  styleUrls: ['./blog-hub-section.component.css']
})
export class BlogHubSectionComponent implements OnInit {
  blogHubSection: BlogHubSection | undefined | null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getBlogHubSection();
  }

  private getBlogHubSection(): void {
    this.http.get<BlogHubSection>(`${environment.apiUrl}/blog-hub-section`).subscribe(
      (res: BlogHubSection) => {
        this.blogHubSection = res;
      }, (error) => {
        console.error(error);
      });
  }

  chunk(arr: BlogHubItem[], chunkSize: number): BlogHubItem[][] {
    const chunks: BlogHubItem[][] = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  }

  trackByFn(index: number, item: BlogHubItem): number {
    return item.id!;
  }

  trackBySlide(index: number, slideItems: BlogHubItem[]): number {
    return index;
  }
}
