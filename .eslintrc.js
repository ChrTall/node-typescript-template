// eslint-disable-next-line no-undef
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2019,
		project: './tsconfig.json',
		sourceType: 'module',
		tsconfigRootDir: __dirname,
	},
	plugins: ['@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:rxjs/recommended'
	],
	rules: {
		'indent': ['error', 'tab'],
		'quotes': ['error', 'single'],
		'rxjs/no-implicit-any-catch': 'off',
		// subjects should be private and expose observables.
		'rxjs/no-exposed-subjects': ['error', { allowProtected: true }],
		// subjects and observables should have a $ suffix.
		'rxjs/finnish': [
			'error',
			{
				functions: false,
				methods: false,
				parameters: true,
				properties: true,
				variables: true,
				strict: true,
				// Exclude Angular specific names.
				names: {
					'^(canActivate|canActivateChild|canDeactivate|canLoad|intercept|resolve|validate)$': false,
				},
				// Exclude Angular Event emitters from the rules.
				types: {
					'^EventEmitter$': false,
				},
			},
		],
	},
}
