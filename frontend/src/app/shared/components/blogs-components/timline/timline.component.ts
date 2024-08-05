import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
interface TimelineEvent {
  date: string;
  title: string;
  content: string;
  readMoreLink: string;
}
@Component({
  selector: 'app-timline',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './timline.component.html',
  styleUrl: './timline.component.css'
})
export class TimlineComponent implements OnInit {
  timelineEvents: TimelineEvent[] = [];
  currentScrollPosition: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.getTimeLineSection();
    this.updateCssVariables(); // Set initial CSS variables
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const elements = document.querySelectorAll('.timeline-panel');
    const badges = document.querySelectorAll('.timeline-badge');
    const windowHeight = window.innerHeight;

    elements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      const badge = badges[index] as HTMLElement;

      if (rect.top < windowHeight / 1.5 && rect.bottom >= 0) {
        this.currentScrollPosition = Math.min(index, this.timelineEvents.length - 1);
        this.updateCssVariables(); // Update CSS variables on scroll

        // Change badge color based on scroll position
        badge.style.backgroundColor = '#2ecc71'; // Change color here
      } else {
        badge.style.backgroundColor = '#1c1c1c'; // Default color
      }
    });
  }

  private getTimeLineSection(): void {
    this.timelineEvents = [
      {
        date: 'May 23, 2024',
        title: 'SEO Strategies for Streamers: Boosting Visibility with Graphics and Animation',
        content: 'In the competitive world of online streaming, standing out is essential. Leveraging SEO strategies, particularly through optimized graphics and animation, can significantly boost visibility. This...',
        readMoreLink: '#'
      },
      {
        date: 'May 22, 2024',
        title: 'Exploring The Impact Of High-Quality Graphics On Viewer Engagement:',
        content: 'In the dynamic world of online content creation, captivating visuals have emerged as a cornerstone of viewer engagement. High-quality streamer graphics not only draw viewers...',
        readMoreLink: '#'
      },
      {
        date: 'May 22, 2024',
        title: 'The Future of Stream Branding: Predictions and Insights',
        content: 'In our exploration of the future of stream branding, we delve into groundbreaking trends poised to reshape the streaming landscape. From immersive experiences leveraging AR...',
        readMoreLink: '#'
      },
      {
        date: 'May 16, 2024',
        title: 'Streamers’ Guide to Choosing the Right Animation Styles for Their Brand',
        content: 'Animation styles are a powerful tool for streamers looking to establish a distinctive brand identity and captivate their audience. From subtle motion graphics to dynamic...',
        readMoreLink: '#'
      },
      {
        date: 'May 16, 2024',
        title: 'Optimizing Stream Graphics for Different Platforms: A Comprehensive Guide',
        content: 'In the bustling world of online streaming, standing out amidst the sea of content is crucial for attracting and retaining viewers. One key aspect that...',
        readMoreLink: '#'
      },
      {
        date: 'May 14, 2024',
        title: 'Behind the Scenes: The Art of Crafting Custom Animated Alerts for Streamers',
        content: 'In the competitive world of online streaming, capturing and retaining viewer attention is essential. One effective way streamers achieve this is through custom attention-grabbing animated...',
        readMoreLink: '#'
      },
      {
        date: 'May 9, 2024',
        title: 'The Rise of Interactive Elements in Stream Graphics: What’s Next?',
        content: 'In the ever-evolving landscape of online streaming, interactivity has become a crucial element for engaging and retaining viewers. Streamers now incorporate interactive custom streamer graphics,...',
        readMoreLink: '#'
      },
      {
        date: 'May 4, 2024',
        title: 'Top 10 Graphics Trends For Streamers',
        content: 'In the dynamic realm of online streaming, staying ahead of the curve is paramount for capturing and retaining audience attention. As visual storytelling continuously evolves,...',
        readMoreLink: '#'
      },
      {
        date: 'April 29, 2024',
        title: 'The Evolution of Animation in Streaming: What Streamers Need to Know',
        content: 'Animation has become an indispensable tool for streamers looking to enhance their content and captivate audiences in the competitive world of online streaming. From subtle...',
        readMoreLink: '#'
      },
    ];
  }
  updateCssVariables() {
    const heightPercentage = (this.currentScrollPosition + 1) / this.timelineEvents.length * 89;
    const color = '#2ecc71'; // Green color for the line
    document.documentElement.style.setProperty('--timeline-line-height', `${heightPercentage}%`);
    document.documentElement.style.setProperty('--timeline-line-color', color);
  }
}
