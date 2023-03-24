export function getSearchList(subGroups) {
	return subGroups.map((item) => {
		let lab = [];
		if (item.items !== []) {
			let lab1 = item.items.map((labels) => {
				return {
					text: labels.label,
					id: labels.value,
				};
			});
			if (lab1.length) lab.push(lab1);
		}
		if (item.subGroups) {
			let lab2 = item.subGroups.map((labelss, index) => {
				let children = labelss.items.map((ite) => {
					return {
						text: ite.label,
						id: ite.value,
					};
				});
				return {
					text: labelss.label,
					id: index,
					children: children,
				};
			});
			if (lab2.length) lab.push(lab2);
		}
		return {
			text: item.label,
			children: lab[0],
		};
	});
}