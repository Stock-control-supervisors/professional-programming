import { Component, OnDestroy, OnInit } from '@angular/core';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { Subject, takeUntil } from 'rxjs';
import { AllCoursesType } from '../models/learning-app/all-courses-type';
import { LearningAppService } from '../services/learning-app.service';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public learningAppAllCourses: AllCoursesType[] = [];
  public value: number = 4;

  constructor(
    private learningAppService: LearningAppService,
  ) {}

  ngOnInit() {
    this.learningAppService.getAllCoursesList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.learningAppAllCourses = data,
      error: (_err: any) => this.learningAppAllCourses = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
