import { MagatamaModel } from './../../../../../assets/model/all-models';
import { DemonsService } from './../../../../services/demons.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DemonsModel } from 'src/assets/model/all-models';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

const ELEMENT_DATA_MAGATAMA: MagatamaModel[] = [];
const ELEMENT_DATA_DEMONS: DemonsModel[] = [];
@Component({
  selector: 'app-main-demons-page',
  templateUrl: './main-demons-page.component.html',
  styleUrls: ['./main-demons-page.component.css'],
})
export class MainDemonsPageComponent implements OnInit {
  // demonsArray: DemonsModel[];
  // magatamaArray: MagatamaModel[];
  magatamaArray = new MatTableDataSource(ELEMENT_DATA_MAGATAMA);
  demonsArray = new MatTableDataSource(ELEMENT_DATA_DEMONS);

  columnsDisplayDemons = [
    'race',
    'lvl',
    'name',
    'hp',
    'mp',
    'st',
    'ma',
    'vi',
    'ag',
    'lu',
    'physRes',
    'fireRes',
    'iceRes',
    'elecRes',
    'forceRes',
    'curseRes',
    'nerveRes',
    'mindRes',
    'expelRes',
    'deathRes',
  ];
  columnsDisplayMagatamas = [
    'name',
    'baseSt',
    'baseMa',
    'baseVi',
    'baseAg',
    'baseLu',
    'phys',
    'fire',
    'ice',
    'elec',
    'force',
    'curse',
    'nerve',
    'mind',
    'expel',
    'death',
  ];

  constructor(private demonsService: DemonsService, private route: Router) {}
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatSort) sort2: MatSort;
  ngOnInit(): void {
    this.getDemons();
    setTimeout(() => {
      this.getMagatamas();
    }, 0);
  }

  navigateToDetailDemons(id): void {
    this.route.navigateByUrl(`/Details/Demons/${id}`);
  }

  navigateToDetailMagatama(id): void {
    this.route.navigateByUrl(`/Details/Magatama/${id}`);
  }

  getDemons(): void {
    // tslint:disable-next-line: deprecation
    this.demonsService.getDemons().subscribe((resp) => {
      if (ELEMENT_DATA_DEMONS.length <= 0) {
        resp.forEach((x) => {
          ELEMENT_DATA_DEMONS.push(x);
        });
      }
      this.demonsArray.sort = this.sort;
    });
  }

  getMagatamas(): void {
    // tslint:disable-next-line: deprecation
    this.demonsService.getMagatama().subscribe((resp) => {
      resp.forEach((x) => {
        ELEMENT_DATA_MAGATAMA.push(x);
      });
      this.magatamaArray.sort = this.sort2;
    });
  }
}
