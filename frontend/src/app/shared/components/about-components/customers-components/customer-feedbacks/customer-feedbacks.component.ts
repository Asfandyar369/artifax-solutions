import { Component, OnInit } from '@angular/core';
import { StreamerSection } from '../../../../../models/StreamerSection';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-customer-feedbacks',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './customer-feedbacks.component.html',
  styleUrl: './customer-feedbacks.component.css'
})
export class CustomerFeedbacksComponent implements OnInit {
  feedback: StreamerSection | undefined | null;
  constructor() { }
  ngOnInit(): void {
    this.getStreamerFeature();
  }
  private getStreamerFeature(): void {
    this.feedback = {
      id: 1,
      title: "Hear From Our Happy Streamers",
      subTitle: "Customer Feedbacks",
      description: "Discover why streamers love our graphics! Watch read testimonials from content creators who've taken their streams to the next level.",
      videoUrl: [
        "https://streamerstation.com/wp-content/uploads/2024/02/SS-Video-Testimonial-1.webm",
        "https://streamerstation.com/wp-content/uploads/2024/02/SS-Video-Testimonial-2.webm"
      ]
    };
  }
}
