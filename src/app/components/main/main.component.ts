import { Component, OnInit } from '@angular/core';
import { DataService, DataInterface } from 'src/app/services/data.service';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject, of } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public nestedData: MatTreeNestedDataSource<DataInterface>;
  public changedData = new BehaviorSubject<DataInterface[]>([]);
  public treeControl = new NestedTreeControl<DataInterface>(this.getChildren);

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.nestedData = new MatTreeNestedDataSource();
    this.changedData.subscribe(data => this.nestedData.data = data);
    this.changedData.next(this.dataService.getData());
  }

  public hasChild = (_: number, node: DataInterface) => !!node.children;

  private getChildren(node: DataInterface) {
    return of(node.children);
  }

}
