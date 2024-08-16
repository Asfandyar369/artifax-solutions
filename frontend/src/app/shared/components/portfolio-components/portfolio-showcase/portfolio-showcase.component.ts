import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PortfolioShowcase, PortfolioShowcaseCard } from '../../../../models/PortfolioShowcase';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { PortfolioImageLoaderComponent } from "../../common/portfolio-image-loader/portfolio-image-loader.component";
import { trigger, transition, style, animate } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-portfolio-showcase',
  standalone: true,
  imports: [NgIf, NgFor, PortfolioImageLoaderComponent, NgClass],
  templateUrl: './portfolio-showcase.component.html',
  styleUrls: ['./portfolio-showcase.component.css'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('300ms', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0, transform: 'scale(0.8)' }))
      ])
    ])
  ]
})
export class PortfolioShowcaseComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  filteredCardList: PortfolioShowcaseCard[] | undefined | null;
  portfolioShowcase: PortfolioShowcase | undefined | null;
  uploadedImageNames: Set<string> = new Set();
  activeFilter: string = 'All Logo';

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getPortfolioShowcase();
  }

  private getPortfolioShowcase(): void {
    const savedShowcase = localStorage.getItem('portfolioShowcase');
    if (savedShowcase) {
      this.portfolioShowcase = JSON.parse(savedShowcase);
    } else {
      this.portfolioShowcase = {
        id: 1,
        subTitle: "",
        title: "Logo",
        description: "Stand out with eye-catching profile picture frames that reflect your personality and brand.",
        filterOptions: ["All Logo", "Static"],
        showCaseCardList: [
          {
            id: 1,
            imageUrl: "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-pfp-portfolio-1.jpg",
            altText: "Static pfp",
            title: "Multi Character",
            description: "Static",
            width: 304,
            height: 304
          },
          {
            id: 2,
            imageUrl: "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-2d-half-body-model-portfolio-1.jpg",
            altText: "static 2d half body model",
            title: "Vector Art",
            description: "Static",
            width: 304,
            height: 304
          },
          {
            id: 3,
            imageUrl: "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-emotes-portfolio-3.jpg",
            altText: "5 Static emotes",
            title: "Mascot",
            description: "Static",
            width: 304,
            height: 304
          }
        ]
      };
    }
    this.filteredCardList = this.portfolioShowcase?.showCaseCardList;
  }

  filterCards(option: string): void {
    this.activeFilter = option;
    if (option === 'All Logo') {
      this.filteredCardList = this.portfolioShowcase?.showCaseCardList;
    } else {
      this.filteredCardList = this.portfolioShowcase?.showCaseCardList?.filter(
        card => card.description === option
      );
    }
  }

  onDeleteImage(index: number): void {
    this.portfolioShowcase?.showCaseCardList?.splice(index, 1);
    this.savePortfolioShowcase(); // Save after deletion
    this.toastr.success('Card deleted successfully!', 'Toastr Success');
  }

  triggerFileInput(): void {
    this.fileInput.nativeElement.click(); // Programmatically click the hidden file input
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const fileNameWithoutExtension = file.name.replace(/\.[^/.]+$/, "");

      if (this.uploadedImageNames.has(fileNameWithoutExtension)) {
        this.toastr.info('File already uploaded!', 'Toastr Info');
        return;
      }

      this.uploadedImageNames.add(fileNameWithoutExtension);

      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const img = new Image();
        img.onload = () => {
          const originalWidth = img.width;
          const originalHeight = img.height;
          const targetWidth = 304;
          const targetHeight = Math.round((targetWidth / originalWidth) * originalHeight);

          const newCard: PortfolioShowcaseCard = {
            id: this.generateId(),
            imageUrl: URL.createObjectURL(file),
            altText: file.name,
            title: fileNameWithoutExtension,
            description: "Static",
            width: targetWidth,
            height: targetHeight
          };

          this.portfolioShowcase?.showCaseCardList?.push(newCard);
          this.filterCards(this.activeFilter);
          this.savePortfolioShowcase();
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }



  private generateId(): number {
    // Generate a unique ID for the new card (adjust logic as needed)
    return Math.max(0, ...(this.portfolioShowcase?.showCaseCardList?.map(c => c.id!) || [])) + 1;
  }
  private savePortfolioShowcase(): void {
    if (this.portfolioShowcase) {
      localStorage.setItem('portfolioShowcase', JSON.stringify(this.portfolioShowcase));
    }
  }
}
