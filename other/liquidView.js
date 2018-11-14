var LiquidCell = /** @class */ (function () {
    function LiquidCell(r_index, c_index, value) {
        this.r_index = r_index;
        this.c_index = c_index;
        this.value = value;
    }
    ;
    return LiquidCell;
}());
var LiquidColumn = /** @class */ (function () {
    function LiquidColumn(field, title, r_index, cells) {
        if (cells === void 0) { cells = [new LiquidCell(r_index, 0, title)]; }
        this.field = field;
        this.title = title;
        this.r_index = r_index;
        this.cells = cells;
    }
    ;
    LiquidColumn.prototype.createCell = function (value) {
        var c_index = this.cells.length;
        this.cells.push(new LiquidCell(this.r_index, c_index, value));
    };
    return LiquidColumn;
}());
var LiquidRow = /** @class */ (function () {
    function LiquidRow(r_header) {
        this.r_header = r_header;
        this.columns = this.createRowHeader(r_header);
    }
    ;
    LiquidRow.prototype.createRowHeader = function (r_header) {
        var r_index = 0;
        return Object.entries(r_header).map(function (entry) {
            return new LiquidColumn(entry[0], entry[1], r_index++);
        });
    };
    ;
    return LiquidRow;
}());
var userHeader = {
    id: "ID",
    firstName: "First Name",
    lastName: "Last Name",
    password: "Password",
    username: "Username",
    isActive: "Active",
    isEntryAdmin: "Entry Admin",
    isListAdmin: "List Admin",
    isLocationManager: "Location Manager",
    isOperatorAdmin: "Operator Admin",
    isUserAdmin: "User Admin"
};
var myRow = new LiquidRow(userHeader);
myRow.columns.forEach(function (c) {
    console.log("\tColumn title: " + c.title + ",\tColumn field: " + c.field + ",\tColumn cell value: " + c.cells[0].value + "\n\t");
});
