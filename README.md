# [Angular Basics By Sam Julien, eggHead.io](https://egghead.io/lessons/angular-use-single-file-components-by-default-in-angular)

## Create First App

- install angular cli with `npm i -g @angular/cli`
- create new project `ng new <prj-name>`
- create new component with `ng g c <comp-name>`
- use the options `--inlineStyle --inlineTemplate` for cli to not generate new files for template and style
- use the `-d` for dry run to inspect changes before you apply them
- to persist the `--inlineStyle --inlineTemplate` without adding the options for every command, modify the 'angular.json' file with the following:

```json
      "schematics": {
        "@schematics/angular:component": {
          "inlineStyle": true,
          "inlineTemplate": true
        }
      },
```

## PAss Data to Componenet

- To pass data to child component, use the `@Input() <property>` decorator in child component, in parent component bind the property to the value `<child-selector [property]="value"></child-selector>`

## Reactive Forms

- To use reactive forms, add it to app module import array `import {ReactiveFormsModule} from '@angular/forms'`
- To use the reactiveFormsModule, a model needs to be created and pound to the form. use FormBuilder `import {FormBuilder} from '@angular/forms'` to create model in the component constructor:

```ts
constructor(private formBuilder: FormBuilder) {
    this.formModel = this.formBuilder.group({
        modelProperty: 'initialValue'
    })
}
```

- A form then expects to be pound to a model through `formGroup`, use `ngSubmit` to handle form submit `<form [formGroup]="formModel" (ngSubmit)="onSubmit(formModel.value)">`
- form fields are expected to be pound to a formModel property through `formControlName` attribute, for ex `<input formControlName="<formModel-property>"`
- Remember, in angular `[]` means binding or input, `()` means output or event
