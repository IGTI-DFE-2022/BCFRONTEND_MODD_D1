import { Component, OnInit } from '@angular/core';
import { TripResult } from '../model/tripResult';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  result: TripResult | null = null;

  constructor(private calculatorService: CalculatorService) {}

  ngOnInit(): void {
    this.calculatorService.watchResult().subscribe((r) => (this.result = r));
  }
}
