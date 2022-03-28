function stringifyContent(content) {
	if (typeof content === "string") return content;
	const [type, ...children] = content;

	switch (type) {
		case "numbers":
			return `<table>
				${children[0].split("\n").map((row, i) => {
					const [name, ...rest] = row.split(": ");
					return `<tr>
						<td>#${i}. ${name}</td>
						<td>\\(${rest.join(": ")}\\)</td>
					</tr>`
				}).join("")}
			</table>`;
		case "pages":
			return children.map(page =>
				`<button onclick="updatePage('${page}')">${page}</button>`).join("");
		default:
			return `<${type}>${children.map(stringifyContent).join("")}</${type}>`;
	}
}

const pages = {
	"Page 1": ["div",
		["numbers",
			`Zero: 0
			One: 1
			Two: 2
			Three: 3
			Four: 4
			Five: 5
			Six: 6
			Seven: 7
			Eight: 8
			Nine: 9
			Ten: 10
			Hundred: 100
			Thousand: 1000
			: 10^{4}
			: 10^{5}
			: 10^{10}
			: 10^{100}
			: 10^{10^{10}}
			Limit of exponent: 10\\uparrow\\uparrow10
			: 10\\uparrow\\uparrow10\\uparrow\\uparrow10
			Limit of tetrate: 10\\uparrow\\uparrow\\uparrow10
			Limit of pentate: 10\\uparrow\\uparrow\\uparrow\\uparrow10
			Limit of hyperoperate: \\{10, 10, 10\\}
			Limit of Beaf: ???
			Infinity: \\omega
			: \\omega+1
			: \\omega+10
			: \\omega+\\text{limit of exponent}
			: \\omega+\\text{limit of beaf}
			: \\omega2
			: \\omega3
			: \\omega^2
			: \\omega^\\omega
			: \\omega^{\\omega^\\omega}
			Epsilon 0: \\varepsilon_0
			: \\varepsilon_1
			: \\varepsilon_\\omega
			: \\varepsilon_{\\varepsilon_0}
			Zeta 0: \\zeta_0
			Eta 0: \\eta_0
			Gamma 0: \\Gamma_0
			Large Valben Ordinal: \\psi(\\Omega^{\\Omega^\\Omega})
			BHO: \\psi(\\Omega_2)
			: \\psi(\\Omega_\\omega)
			Omega fix point: \\psi(I)
			Mahlo fix point: \\psi(M)
			Compact ordinal fix point: \\psi(K)
			Aleph 0: \\aleph_0
			Aleph 1: \\aleph_1 = \\mathcal P(\\aleph_0)
			Aleph Aleph 0: \\aleph_{\\aleph_0}
			Chruch oridnal: \\omega^{CK}_1
			Second church ordinal: \\omega^{CK}_2
			Church church ordinal: \\omega^{CK}_{CK}
			Church \\(+1\\) ordinal: \\omega^{CK+1}
			Church new epsilon of church ordinal: \\omega^{\\varepsilon_{CK+1}}
			Church new church of church ordinal: \\omega^{CK^{CK}}
			Double church ordinal: \\omega^{CK_2}
			Pi double reflection ordinal: \\Pi_2
			Pi triple reflection ordinal: \\Pi_3
			Pi omega reflection ordinal: \\Pi_\\omega
			Pi church reflection ordinal: \\Pi_{CK}
			Pi reflection fix point: \\Pi_{\\text{Fix }\\circ}
			Limit of ordinal: \\lim\\omega
			Church limit of ordinal: \\lim^{CK}\\omega
			Fix point of limit ordinal: \\text{Fix}\\circ\\lim\\omega
			Fix point of all fix point: \\text{Fix }\\circ^2
			Church fix point: \\text{Fix }\\circ^{CK}
			New epsilon of fix point: \\text{Fix }\\varepsilon_{\\circ+1}
			New fix of fix point: \\text{Fix Fix }\\circ
			New fix of fix of fix point: \\text{Fix Fix Fix }\\circ`],
		["hr"],
		["pages", "Page 2"],
	],
	"Page 2": ["div",
		["pages", "Page 1"],
		["hr"],
		`Here there is a new operator for new of<br>
		\\(A \\oplus B =\\) New A of B<br>
		For example, church new epsilon of church ordinal \\(= \\omega^{\\varepsilon\\oplus CK}\\)`,
		["numbers", 
			`Fix new point of point: \\text{Fix}\\circ\\oplus\\;\\circ
			Fix point of new point: \\text{Fix}\\circ\\circ\\oplus\\circ
			Church fix point of new point: \\text{Fix}\\circ^{CK}\\oplus\\;\\circ
			Fix new point of new point: \\text{Fix}\\circ^{\\circ\\oplus\\circ}\\oplus\\;\\circ
			Reflecting of fix point: \\Pi\\oplus\\circ
			Limit of ordinal of fix point: \\lim\\omega\\oplus\\circ
			Super-reflecting ordinal: \\Sigma_0
			New super-reflecting ordinal of reflecting: \\Sigma_0\\oplus\\Pi
			New super-reflecting ordinal of super-reflecting: \\Sigma_0\\oplus\\Sigma
			Other super-reflecting ordinal: \\Sigma_1
			Other other super reflecting ordinal: \\Sigma_{1_1}
			Limit of super-reflecting: \\lim\\Sigma_\\circ
			Meta ordinal: \\mathscr M
			Meta ordinal of omega: \\mathscr M\\oplus\\omega
			Meta ordinal of church: \\mathscr M\\oplus CK
			Meta ordinal of reflecting: \\mathscr M\\oplus\\Pi
			Meta ordinal of point: \\mathscr M\\oplus\\circ
			Second meta ordinal: \\mathscr M_2
			Point of meta ordinal: \\mathscr M_\\circ
			Church meta ordinal: \\mathscr M^{CK}
			Reflecting church of meta ordinal: \\mathscr M^{\\Pi_{CK}}
			Meta ordinal of super-reflecting: \\mathscr M\\oplus\\Sigma_0
			Limit of meta-ordinal: \\mathscr M
			Meta meta ordinal: \\mathscr{MM}
			End of all meta: \\mathscr M \\ldots
			Ordinal tetration (Static): \\omega\\uparrow\\uparrow^S\\omega
			: \\omega\\uparrow\\uparrow\\uparrow^S\\omega
			: \\{\\omega,\\omega,\\omega\\}
			New ordinal of limit of beaf: \\omega\\;\\oplus\\;???
			Infinity after infinity: \\omega\\rightarrow\\omega
			Meta ordinal after infinity: \\omega\\rightarrow\\mathscr M
			Ordinal tetration (Static) after infinity: \\omega\\rightarrow\\omega\\uparrow\\uparrow^S\\omega
			Infinity after infinity after infinity: \\omega\\rightarrow\\omega\\rightarrow\\omega
			Infinity after infinity after infinity after infinity: \\omega\\rightarrow\\omega\\rightarrow\\omega\\rightarrow\\omega
			Infinity after infinity+1: \\omega+1\\rightarrow\\omega
			Infinity after epsilon: \\varepsilon\\rightarrow\\omega
			Infinity after church: CK\\rightarrow\\omega
			Infinity after meta ordinal: \\mathscr M\\rightarrow\\omega
			Other other other super-reflecting ordinal: \\Sigma_{1_{1_1}}
			Super-reflecting ordinal after infinity: \\omega\\rightarrow\\Sigma_0
			Other super-reflecting ordinal after infinity: \\omega\\rightarrow\\Sigma_1
			Other other super-reflecting ordinal after infinity: \\omega\\rightarrow\\Sigma_{1_1}
			Other other other super-reflecting ordinal after infinity: \\omega\\rightarrow\\Sigma_{1_{1_1}}
			Ordinal tetration (Static\\(+1\\)): \\omega\\uparrow\\uparrow^{S+1}\\omega
			Ordinal tetration (Static\\(\\times 2\\)): \\omega\\uparrow\\uparrow^{S\\times 2}\\omega
			Ordinal tetration (Static\\(\\uparrow\\)Static): \\omega\\uparrow\\uparrow^{S\\uparrow S}\\omega
			Church ordinal tetration (Static) ordinal: \\omega^{CK\\uparrow\\uparrow^SCK}
			Church ordinal tetration (Infinity after) ordinal: \\omega^{\\omega\\rightarrow CK}
			Church limit of beaf ordinal: \\omega^{CK\\oplus???}
			Ordinal tetration (Climbing): \\omega\\uparrow\\uparrow^C\\omega
			: \\omega\\uparrow\\uparrow\\uparrow^c\\omega
			Climbing infinity: \\omega^C
			Infinity after climbing infinity: \\omega\\rightarrow\\omega^C
			Climbing infinity after climbing infinity: \\omega^C\\rightarrow\\omega^C
			Church limit of climbing beaf ordinal: \\omega^{CK\\oplus???^C}
			Ordinal tetration (Static tetration (Static)): \\omega\\uparrow\\uparrow^{S\\uparrow\\uparrow^SS}\\omega
			Static tetration (Static) infinity: \\omega^{S\\uparrow\\uparrow^SS}
			Ordinal tetration (Climbing tetration (Climbing)): \\omega\\uparrow\\uparrow^{C\\uparrow\\uparrow^CC}\\omega
			Weak church ordinal: C\\psi(K)
			Weak church tetration: \\omega\\uparrow\\uparrow^{C\\psi(K)}\\omega
			Weak church tetration tetration (Static): \\omega\\uparrow\\uparrow^{C\\psi(K)\\uparrow\\uparrow^SC\\psi(K)}\\omega
			Weak church tetration tetration (Weak church tetration): \\omega\\uparrow\\uparrow^{C\\psi(K)\\uparrow\\uparrow^{C\\psi(K)}\\psi(K)}\\omega
			Weak church infinity: \\omega^{C\\psi(K)}
			Church compact cardinal: CK
			Aleph of church compact cardinal: \\aleph\\oplus CK
			Ordinal tetration (Church): \\omega\\uparrow\\uparrow^{CK}\\omega
			First church infinity cardinal: \\omega^{CK}_1
			Reflecting church cardinal: CK_\\Pi
			Super-reflecting church cardinal: CK_\\Sigma
			Other other other other super-reflecting ordinal: \\Sigma_{1_{1_{1_1}}}`]
	],
};

for (const page in pages) pages[page] = stringifyContent(pages[page]);