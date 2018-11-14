// interface UserModel {
// 	id: string;
// 	firstName: string;
// 	lastName: string;
// 	password: string;
// 	username: string;
// 	isActive: boolean;
// 	isEntryAdmin: boolean;
// 	isListAdmin: boolean;
// 	isLocationManager: boolean;
// 	isOperatorAdmin: boolean;
// 	isUserAdmin: boolean;
// }


// interface LiquidCellModel {
// 	c_index: number;
// 	r_index: number;
// 	value: any;
// }

// class LiquidCell implements LiquidCellModel {
// 	public constructor(
// 		public r_index: number,
// 		public c_index: number,
// 		public value: any
// 	) { };
// }

// interface LiquidColumnModel {
// 	title: string;
// 	field: string;
// 	cells: LiquidCell[];
// 	createCell(value: any): void;
// }

// class LiquidColumn implements LiquidColumnModel {
// 	public constructor(
// 		public field: string,
// 		public title: string,
// 		public r_index: number,
// 		public cells: LiquidCell[] = [new LiquidCell(r_index, 0, title)]
// 	) { }; 

// 	public createCell(value: any): void {
// 		const c_index = this.cells.length;
// 		this.cells.push(new LiquidCell(this.r_index, c_index, value))
// 	}

// }

// interface LiquidRowModel {
// 	columns: LiquidColumn[],
// 	createRowHeader(dataObj: object): void,
// }

// class LiquidRow implements LiquidRowModel {
// 	public columns: LiquidColumn[];

// 	public constructor ( public readonly r_header: object ) {
// 		this.columns = this.createRowHeader(r_header);
// 	};

// 	public createRowHeader(r_header: object): LiquidColumn[] {
// 		let r_index = 0;
// 		return Object.entries(r_header).map(entry => {
// 			return new LiquidColumn(entry[0], entry[1], r_index++);
// 		});
// 	};

// }

// let userHeader = {
// 	id: "ID",
// 	firstName: "First Name",
// 	lastName: "Last Name",
// 	password: "Password",
// 	username: "Username",
// 	isActive: "Active",
// 	isEntryAdmin: "Entry Admin",
// 	isListAdmin: "List Admin",
// 	isLocationManager: "Location Manager",
// 	isOperatorAdmin: "Operator Admin",
// 	isUserAdmin: "User Admin",
// }


// let myRow = new LiquidRow(userHeader);

// myRow.columns.forEach(c => {
// 	console.log(`Column title: ${c.title}, Column field: ${c.field}, Column cells: ${c.cells}`);
// })
