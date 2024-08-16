import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PortfolioShowcase } from '../../../../models/PortfolioShowcase';
import { NgClass, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { PortfolioShowcaseCard } from '../../../../models/PortfolioShowcase';
import { animate, style, transition, trigger } from '@angular/animations';
import { PortfolioImageLoaderComponent } from "../../common/portfolio-image-loader/portfolio-image-loader.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ModalComponent } from '../../common/modal/modal.component';


@Component({
  selector: 'app-portfolio-models',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, NgOptimizedImage, PortfolioImageLoaderComponent],
  templateUrl: './portfolio-models.component.html',
  styleUrl: './portfolio-models.component.css',
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
export class PortfolioModelsComponent implements OnInit {
  portfolioModel: PortfolioShowcase | undefined | null;
  filteredCardList: PortfolioShowcaseCard[] | undefined | null;
  activeFilter: string = 'All Overlay Set';
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  uploadedImageNames: Set<string> = new Set();


  constructor(
    private modalService: NgbModal,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getPortfolioModels();
  }

  private getPortfolioModels(): void {
    const savedShowcase = localStorage.getItem('portfolioModel');
    if (savedShowcase) {
      this.portfolioModel = JSON.parse(savedShowcase);
    } else {
      this.portfolioModel = {
        "id": 1,
        "subTitle": "Overlay Set",
        "description": "Get everything you need for a professional stream, including overlays, alerts, and screens.",
        "filterOptions": [
          "All Overlay Set",
          "Static",
        ],
        "showCaseCardList": [
          {
            "id": 1,
            "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-2d-half-body-model-portfolio-3.jpg",
            "altText": "static 2d half body model",
            "title": "Static",
            "description": "2D Models"
          },
          {
            "id": 2,
            "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-2d-half-body-model-portfolio-2.jpg",
            "altText": "static 2d half body model",
            "title": "Static",
            "description": "2D Models"
          },
          {
            "id": 3,
            "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-2d-half-body-model-portfolio-1.jpg",
            "altText": "static 2d half body model",
            "title": "Static",
            "description": "2D Models"
          },
          {
            "id": 4,
            "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-2d-full-body-model-portfolio-3.gif",
            "altText": "2D ANIMATED",
            "title": "Animated",
            "description": "2D Models"
          },
          {
            "id": 5,
            "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-2d-full-body-model-portfolio-2.gif",
            "altText": "2D ANIMATED",
            "title": "Animated",
            "description": "2D Models"
          },
          {
            "id": 6,
            "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-2d-full-body-model-portfolio-1.gif",
            "altText": "2D ANIMATED",
            "title": "Animated",
            "description": "2D Models"
          },
          {
            "id": 7,
            "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-3d-full-body-model-portfolio-3.jpg",
            "altText": "static 3d full body model",
            "title": "Static",
            "description": "3D Models"
          },
          {
            "id": 8,
            "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-3d-full-body-model-portfolio-2.jpg",
            "altText": "static 3d full body model",
            "title": "Static",
            "description": "3D Models"
          },
          {
            "id": 9,
            "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-3d-full-body-model-portfolio-1.jpg",
            "altText": "static 3d full body model",
            "title": "Static",
            "description": "3D Models"
          },
          {
            "id": 10,
            "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-3d-full-body-model-portfolio-3.gif",
            "altText": "3D ANIMATED",
            "title": "Animated",
            "description": "3D Models"
          },
          {
            "id": 11,
            "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-3d-full-body-model-portfolio-2.gif",
            "altText": "3D ANIMATED",
            "title": "Animated",
            "description": "3D Models"
          },
          {
            "id": 12,
            "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-3d-full-body-model-portfolio-1.gif",
            "altText": "3D ANIMATED",
            "title": "Animated",
            "description": "3D Models"
          }
        ]
      };
    }
    this.filteredCardList = this.portfolioModel?.showCaseCardList;
  }

  filterCards(option: string): void {
    this.activeFilter = option;
    if (option === 'All Overlay Set') {
      this.filteredCardList = this.portfolioModel?.showCaseCardList;
    } else {
      this.filteredCardList = this.portfolioModel?.showCaseCardList
        ?.filter(
          (card: PortfolioShowcaseCard) => card.description === option
        );
    }
  }

  onDeleteImage(index: number): void {
    this.portfolioModel?.showCaseCardList?.splice(index, 1);
    this.savePortfolioShowcase(); // Save after deletion
  }

  openDeleteModal(index: number) {
    const modalRef = this.modalService.open(ModalComponent);

    modalRef.componentInstance.onConfirm.subscribe((password: string) => {
      if (this.validatePassword(password)) {
        this.onDeleteImage(index);
        this.toastr.success('Card deleted successfully!', 'Toastr Success');
      } else {
        this.toastr.error('Invalid password. Please try again.', 'Toastr Error');
      }
    });
  }

  validatePassword(password: string): boolean {
    // Replace this with actual password validation logic
    return password === '@123';
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

          const newCard: PortfolioShowcaseCard = {
            id: this.generateId(),
            imageUrl: URL.createObjectURL(file),
            altText: file.name,
            title: fileNameWithoutExtension,
            description: "Static",
          };

          this.portfolioModel?.showCaseCardList?.push(newCard);
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
    return Math.max(0, ...(this.portfolioModel?.showCaseCardList?.map(c => c.id!) || [])) + 1;
  }
  private savePortfolioShowcase(): void {
    if (this.portfolioModel) {
      localStorage.setItem('portfolioModel', JSON.stringify(this.portfolioModel));
    }
  }
}
