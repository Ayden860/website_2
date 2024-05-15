trigger = document.getElementById('arrow-2')
show1 = document.getElementById("drop-down-1")
web = document.getElementById('whole-web')
project = document.getElementById('web')
if (document.URL.includes("index")) {
    // toggle web drop down
    project.addEventListener('mouseover', () => {
        trigger.classList.add('bigArrow')
        project.classList.add('clickable-hover')
    })
    project.addEventListener('mouseout', () => {
        trigger.classList.remove('bigArrow')
        project.classList.remove('clickable-hover')
    })
    // trigger.addEventListener('click', () => {
    // webDrop.classList.toggle('clickable-open')
    // toggleVis('web','clickable-open');
    // show1.classList.toggle('drop-down-open');
    // trigger.classList.toggle('arrChanger')
    // toggleVis('arrow-2','arrChanger');
    // console.log('working')
    // })
    web.addEventListener('click', () => {
        project.classList.toggle('clickable-open')
        show1.classList.toggle('drop-down-open')
        trigger.classList.toggle('arrChanger')
    })
}