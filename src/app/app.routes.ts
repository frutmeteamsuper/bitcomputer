import {RouterModule,Routes} from '@angular/router';
import {
	TestappComponent,
	ChatboxComponent,
	HeaderComponent,
	DeznavComponent,
	NavheaderComponent,
	FooterComponent
	// FruitproductsComponent,
	// FruitbannerComponent,
	// FruitbannerboxComponent,
	// FruitcestaComponent,
	// FruitfooterComponent,
	// FruittopbarComponent,
	// FruitcartComponent,
	// PagoComponent

	}from "./components/index.paginas";

	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',component:TestappComponent},
	{path:'chatbox',component:ChatboxComponent},
	{path:'header',component:HeaderComponent},
	{path:'deznav',component:DeznavComponent},
	{path:'navheader',component:NavheaderComponent},
	{path:'footer',component:FooterComponent},
	// {path:'fruittopbar',component:FruittopbarComponent},
	// {path:'fruitproducts',component:FruitproductsComponent},
	// {path:'fruitbanner',component:FruitbannerComponent},
	// {path:'fruitbannerbox',component:FruitbannerboxComponent},
	// {path:'fruitcesta',component:FruitcestaComponent},
	// {path:'fruitfooter',component:FruitfooterComponent},
	// {path:'fruitcart',component:FruitcartComponent},
	// {path:'pago',component:PagoComponent},
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);

