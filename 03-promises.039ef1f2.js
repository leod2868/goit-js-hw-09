!function(){var e={form:document.querySelector(".form")};function o(e,o){return new Promise((function(n,t){var r=Math.random()>.3;setTimeout((function(){r?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}e.form.addEventListener("submit",(function(n){n.preventDefault();for(var t=Number(e.form.elements.delay.value),r=Number(e.form.elements.step.value),i=Number(e.form.elements.amount.value),a=t,c=1;c<=i;c+=1)position=c,o(position,a+=r).then((function(e){var o=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))}));n.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.039ef1f2.js.map
