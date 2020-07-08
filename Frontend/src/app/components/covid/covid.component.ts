import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { discardPeriodicTasks } from '@angular/core/testing';



@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  uploadForm: FormGroup;

  loading

  private URL_NL = 'http://localhost:3000/api/';

  txt
  textModelo
  nl
  texto: any [] = [];
  valores: any[];
  


  public form = {

    input_data: [{fields: ["Gender", "Married", "Dependents", "Education", "Self_Employed", "ApplicantIncome", "CoapplicantIncome", "LoanAmount", "Loan_Term", "Credit_History_Available", "Housing", "Locality"],
     values: [[]] }]

  
  }


  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }


PostAutoIA(){

  this.form.input_data.values [0] = (this.valores)
  console.log(this.form);
  this.httpClient.post<any>(`${this.URL_NL}upload-text`, this.form).subscribe(
    (res) => {
      this.textModelo=res
    
    },
    (err) => {
   
      console.log(err)
    },
  );

}

prueba(){

 
  var a = this.texto.map(function(item) {
    return parseInt(item, 10);
    
});

this.form.input_data.values [0]  = (a)
console.log(this.form);0



}

}
