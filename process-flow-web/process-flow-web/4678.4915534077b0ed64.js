(self.webpackChunkprocessFlowWeb=self.webpackChunkprocessFlowWeb||[]).push([[4678,612],{4678:(h,d,l)=>{l.r(d),l.d(d,{LEGACY_VERSION:()=>t.VERSION,LegacyAnimationCurves:()=>t.AnimationCurves,LegacyAnimationDurations:()=>t.AnimationDurations,LegacyDateAdapter:()=>t.DateAdapter,LegacyErrorStateMatcher:()=>t.ErrorStateMatcher,LegacyNativeDateAdapter:()=>t.NativeDateAdapter,LegacyNativeDateModule:()=>t.NativeDateModule,LegacyRippleRef:()=>t.RippleRef,LegacyRippleRenderer:()=>t.RippleRenderer,LegacyShowOnDirtyErrorStateMatcher:()=>t.ShowOnDirtyErrorStateMatcher,MATERIAL_LEGACY_SANITY_CHECKS:()=>t.MATERIAL_SANITY_CHECKS,MAT_LEGACY_DATE_FORMATS:()=>t.MAT_DATE_FORMATS,MAT_LEGACY_DATE_LOCALE:()=>t.MAT_DATE_LOCALE,MAT_LEGACY_DATE_LOCALE_FACTORY:()=>t.MAT_DATE_LOCALE_FACTORY,MAT_LEGACY_NATIVE_DATE_FORMATS:()=>t.MAT_NATIVE_DATE_FORMATS,MAT_LEGACY_OPTGROUP:()=>t.MAT_OPTGROUP,MAT_LEGACY_OPTION_PARENT_COMPONENT:()=>t.MAT_OPTION_PARENT_COMPONENT,MAT_LEGACY_RIPPLE_GLOBAL_OPTIONS:()=>t.MAT_RIPPLE_GLOBAL_OPTIONS,MatLegacyCommonModule:()=>t.MatCommonModule,MatLegacyLine:()=>t.MatLine,MatLegacyLineModule:()=>t.MatLineModule,MatLegacyNativeDateModule:()=>t.MatNativeDateModule,MatLegacyOptgroup:()=>_,MatLegacyOption:()=>f,MatLegacyOptionModule:()=>y,MatLegacyOptionSelectionChange:()=>t.MatOptionSelectionChange,MatLegacyPseudoCheckbox:()=>t.MatPseudoCheckbox,MatLegacyPseudoCheckboxModule:()=>t.MatPseudoCheckboxModule,MatLegacyRipple:()=>t.MatRipple,MatLegacyRippleModule:()=>t.MatRippleModule,_MatLegacyOptgroupBase:()=>t._MatOptgroupBase,_MatLegacyOptionBase:()=>t._MatOptionBase,_countGroupLabelsBeforeLegacyOption:()=>t._countGroupLabelsBeforeOption,_getLegacyOptionScrollPosition:()=>t._getOptionScrollPosition,legacyDefaultRippleAnimationConfig:()=>t.defaultRippleAnimationConfig,legacyMixinColor:()=>t.mixinColor,legacyMixinDisableRipple:()=>t.mixinDisableRipple,legacyMixinDisabled:()=>t.mixinDisabled,legacyMixinErrorState:()=>t.mixinErrorState,legacyMixinInitialized:()=>t.mixinInitialized,legacyMixinTabIndex:()=>t.mixinTabIndex,legacySetLines:()=>t.setLines});var e=l(2937),c=l(9219),t=l(5995);const s=["*",[["mat-option"],["ng-container"]]],g=["*","mat-option, ng-container"];function u(a,n){if(1&a&&e.\u0275\u0275element(0,"mat-pseudo-checkbox",5),2&a){const i=e.\u0275\u0275nextContext();e.\u0275\u0275property("state",i.selected?"checked":"unchecked")("disabled",i.disabled)}}function m(a,n){if(1&a&&(e.\u0275\u0275elementStart(0,"span",6),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&a){const i=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1("(",i.group.label,")")}}const M=["*"];let _=(()=>{class a extends t._MatOptgroupBase{}return a.\u0275fac=function(){let n;return function(o){return(n||(n=e.\u0275\u0275getInheritedFactory(a)))(o||a)}}(),a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["mat-optgroup"]],hostAttrs:[1,"mat-optgroup"],hostVars:5,hostBindings:function(i,o){2&i&&(e.\u0275\u0275attribute("role",o._inert?null:"group")("aria-disabled",o._inert?null:o.disabled.toString())("aria-labelledby",o._inert?null:o._labelId),e.\u0275\u0275classProp("mat-optgroup-disabled",o.disabled))},inputs:{disabled:"disabled"},exportAs:["matOptgroup"],features:[e.\u0275\u0275ProvidersFeature([{provide:t.MAT_OPTGROUP,useExisting:a}]),e.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:g,decls:4,vars:2,consts:[["role","presentation",1,"mat-optgroup-label",3,"id"]],template:function(i,o){1&i&&(e.\u0275\u0275projectionDef(s),e.\u0275\u0275elementStart(0,"span",0),e.\u0275\u0275text(1),e.\u0275\u0275projection(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275projection(3,1)),2&i&&(e.\u0275\u0275property("id",o._labelId),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1("",o.label," "))},styles:[".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}"],encapsulation:2,changeDetection:0}),a})(),f=(()=>{class a extends t._MatOptionBase{constructor(i,o,r,p){super(i,o,r,p)}}return a.\u0275fac=function(i){return new(i||a)(e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(t.MAT_OPTION_PARENT_COMPONENT,8),e.\u0275\u0275directiveInject(t.MAT_OPTGROUP,8))},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["mat-option"]],hostAttrs:["role","option",1,"mat-option","mat-focus-indicator"],hostVars:12,hostBindings:function(i,o){1&i&&e.\u0275\u0275listener("click",function(){return o._selectViaInteraction()})("keydown",function(p){return o._handleKeydown(p)}),2&i&&(e.\u0275\u0275hostProperty("id",o.id),e.\u0275\u0275attribute("tabindex",o._getTabIndex())("aria-selected",o.selected)("aria-disabled",o.disabled.toString()),e.\u0275\u0275classProp("mat-selected",o.selected)("mat-option-multiple",o.multiple)("mat-active",o.active)("mat-option-disabled",o.disabled))},exportAs:["matOption"],features:[e.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:M,decls:6,vars:4,consts:[["class","mat-option-pseudo-checkbox",3,"state","disabled",4,"ngIf"],[1,"mat-option-text"],["text",""],["class","cdk-visually-hidden",4,"ngIf"],["mat-ripple","",1,"mat-option-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-option-pseudo-checkbox",3,"state","disabled"],[1,"cdk-visually-hidden"]],template:function(i,o){1&i&&(e.\u0275\u0275projectionDef(),e.\u0275\u0275template(0,u,1,2,"mat-pseudo-checkbox",0),e.\u0275\u0275elementStart(1,"span",1,2),e.\u0275\u0275projection(3),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,m,2,1,"span",3),e.\u0275\u0275element(5,"div",4)),2&i&&(e.\u0275\u0275property("ngIf",o.multiple),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngIf",o.group&&o.group._inert),e.\u0275\u0275advance(1),e.\u0275\u0275property("matRippleTrigger",o._getHostElement())("matRippleDisabled",o.disabled||o.disableRipple))},dependencies:[t.MatRipple,c.NgIf,t.MatPseudoCheckbox],styles:['.mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.mat-option.mat-active::before{content:""}.cdk-high-contrast-active .mat-option[aria-disabled=true]{opacity:.5}.cdk-high-contrast-active .mat-option.mat-selected:not(.mat-option-multiple)::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .cdk-high-contrast-active .mat-option.mat-selected:not(.mat-option-multiple)::after{right:auto;left:16px}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}'],encapsulation:2,changeDetection:0}),a})(),y=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.\u0275\u0275defineNgModule({type:a}),a.\u0275inj=e.\u0275\u0275defineInjector({imports:[t.MatRippleModule,c.CommonModule,t.MatCommonModule,t.MatPseudoCheckboxModule]}),a})()}}]);