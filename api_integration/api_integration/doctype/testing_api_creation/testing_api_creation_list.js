// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

// render
frappe.listview_settings['Testing API Creation'] = {
	// add_fields: ["customer", "customer_name", "base_grand_total", "outstanding_amount", "due_date", "company",
	// 	"currency", "is_return"],
	get_indicator: function(doc) {
		var status_color = {
			"In Review" : "orange",
			"Approved"	: "green",
			"Rejected"	: "red",
			"Cancelled"	: "red"
		};
		return [__(doc.status), status_color[doc.status], "status,=,"+doc.status];
	},
	// right_column: "grand_total"
};
