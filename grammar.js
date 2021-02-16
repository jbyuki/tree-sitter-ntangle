module.exports = grammar({
	name: 'ntangle',
	rules: {
		source_file: $ => seq(
			optional($.assembly_header), 
			$.section,
			repeat(choice(
				$.codeline,
				$.section,
				$.section_ref
			))),
		assembly_header: $ => /##[a-zA-Z0-9_./]*?\s*?\n/,
		codeline: $ => /\s*[^@\s].*?\s*?\n/,
		section: $ => /@[a-zA-Z0-9_./*]*?[+-]?=\s*?\n/,
		section_ref: $ => /\s*@[a-zA-Z0-9_]*?\s*?\n/,
	}
});
