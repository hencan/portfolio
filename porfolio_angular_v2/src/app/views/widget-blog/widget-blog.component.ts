import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import { MatTable, MatTableDataSource } from '@angular/material/table';

import { BlogService } from '../../services/blog/blog.service';
import { WidgetsService } from '../../services/widgets/widgets.service';
import { DatabaseService } from '../../services/database/database.service';

@Component({
  selector: 'app-widget-blog',
  templateUrl: './widget-blog.component.html',
  styleUrls: ['./widget-blog.component.css']
})
export class WidgetBlogComponent implements OnInit {

  // @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  displayedColumns: string[] = ['imageTitle', 'title'];

  blog: any

  // dataSource: any = new MatTableDataSource(this.widgetsService.LASTEST_DATA_SERVICE) // Objeto de dados do componente

  posArray: any = ""
  
  valueProgress = 0

  constructor(
    private router: Router,
    private blogService: BlogService,
    private widgetsService: WidgetsService,
    private databaseService: DatabaseService,
  ) { }

  ngOnInit(): void {
    if (this.widgetsService.lastest_blog_Loaded == false) {
      this.databaseService.getLastestBlog().subscribe(response => {
        this.widgetsService.LASTEST_BLOG_DATA_SERVICE = response.blog.slice()
        console.log('Banco de dados JSON Blog importado para Blog Service')
        // this.dataSource = new MatTableDataSource(this.widgetsService.LASTEST_DATA_SERVICE)
        this.widgetsService.lastest_blog_Loaded = true
        console.log('Banco de dados JSON Lastest Blog importado para Widget Component')
        // this.table.dataSource = this.dataSource // Atualização do banco de dados da planilha
        this.valueProgress = 100
        this.blog = this.widgetsService.LASTEST_BLOG_DATA_SERVICE
      })
    } else {
      console.log('Utilizando BD do Widget Service')
      // this.table.dataSource = this.dataSource // Atualização do banco de dados da planilha
      this.valueProgress = 100
      this.blog = this.widgetsService.LASTEST_BLOG_DATA_SERVICE
    }
  }

  // applyFilter(event: Event) { // Filtro dinamico na tela da tabela
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  buttonRead(element): void {
    // console.log(element)
    // console.log(element.id)
    if (this.blogService.bdLoaded == false) {
      this.databaseService.getBlog().subscribe(response => {
        this.blogService.DATA_SERVICE = response.blog.slice()
        console.log('Banco de dados JSON Blog importado para Blog Service')
        this.blogService.bdLoaded = true
        for (var i = 0; i < this.blogService.DATA_SERVICE.length; i++) {
          if (this.blogService.DATA_SERVICE[i].id == element.id) {
            this.posArray = i
            this.blogService.readData(this.posArray)
            this.router.navigate(['blog/read'])
            window.scrollTo(0, 0)        
            break
          }
        }
        this.valueProgress = 100
      })
    } else {
      console.log('Utilizando BD do Blog Service')
      this.valueProgress = 100
      for (var i = 0; i < this.blogService.DATA_SERVICE.length; i++) {
        if (this.blogService.DATA_SERVICE[i].id == element.id) {
          this.posArray = i
          this.blogService.readData(this.posArray)
          this.router.navigate(['blog/read'])
          window.scrollTo(0, 0)      
          break
        }
      }
    }
  }
  

}
