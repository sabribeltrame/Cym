const synth = new Tone.Synth().toDestination();


function tocar(nota) {
  synth.triggerAttackRelease(nota,"3");
  
}

function cambiarVolumen() {
  const selectVolumen = document.getElementById("volumen");
  const volumen = parseFloat(selectVolumen.value);
  synth.volume.value = volumen;
}
