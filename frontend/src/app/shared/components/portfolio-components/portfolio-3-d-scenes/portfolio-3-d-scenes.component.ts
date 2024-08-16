import { animate, style, transition, trigger } from '@angular/animations';
import { NgClass, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit,ViewChild,ElementRef } from '@angular/core';
import { PortfolioShowcase } from '../../../../models/PortfolioShowcase';
import { RouterLink } from '@angular/router';
import { ButtonList } from '../../../../models/Footer';
import { PortfolioImageLoaderComponent } from "../../common/portfolio-image-loader/portfolio-image-loader.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ModalComponent } from '../../common/modal/modal.component';
import { PortfolioShowcaseCard } from '../../../../models/PortfolioShowcase';

@Component({
  selector: 'app-portfolio-3-d-scenes',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, RouterLink, NgOptimizedImage, PortfolioImageLoaderComponent],
  templateUrl: './portfolio-3-d-scenes.component.html',
  styleUrls: ['./portfolio-3-d-scenes.component.css'],
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
export class Portfolio3DScenesComponent implements OnInit {
  portfolio3DScene: PortfolioShowcase | undefined | null;
  uploadedImageNames: Set<string> = new Set();

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  @Input() subTitle: string | undefined | null;
  @Input() title: string | undefined | null;
  @Input() view: ButtonList | undefined | null;
  
  constructor(
    private modalService: NgbModal,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getPortfolio3DScene();
  }

  private getPortfolio3DScene(): void {
    const savedShowcase = localStorage.getItem('portfolio3DScene');
    if (savedShowcase) {
      this.portfolio3DScene = JSON.parse(savedShowcase);
    } else {
    this.portfolio3DScene = {
      id: 1,
      subTitle: this.subTitle || "Intros/Outros",
      title: this.title || "Level Up Your Content with Dynamic Gaming Intros and Outros",
      description: "All Intros/Outros",
      showCaseCardList: [
        {
          id: 1,
          imageUrl: "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-3d-scenes-portfolio-3.gif",
          altText: "3D ANIMATED SCENES",
          title: "Scenes",
          description: "3D"
        },
        {
          id: 2,
          imageUrl: "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-3d-scenes-portfolio-2.gif",
          altText: "3D ANIMATED SCENES",
          title: "Scenes",
          description: "3D"
        },
        {
          id: 3,
          imageUrl: "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-3d-scenes-portfolio-1.gif",
          altText: "3D ANIMATED SCENES",
          title: "Scenes",
          description: "3D"
        }
      ]
    };
  }
  }
  onDeleteImage(index: number): void {
    this.portfolio3DScene?.showCaseCardList?.splice(index, 1);
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

          this.portfolio3DScene?.showCaseCardList?.push(newCard);
          this.savePortfolioShowcase();
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }



  private generateId(): number {
    // Generate a unique ID for the new card (adjust logic as needed)
    return Math.max(0, ...(this.portfolio3DScene?.showCaseCardList?.map(c => c.id!) || [])) + 1;
  }
  private savePortfolioShowcase(): void {
    if (this.portfolio3DScene) {
      localStorage.setItem('portfolio3DScene', JSON.stringify(this.portfolio3DScene));
    }
  }
}
