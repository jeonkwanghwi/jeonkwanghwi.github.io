// script.js

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function () {
        showToast();
    }, function (err) {
        console.error('Failed to copy text: ', err);
    });
}

function showToast() {
    var toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(function () {
        toast.classList.remove("show");
    }, 2000);
}

function toggleProject(projectCard) {
    const projectContent = projectCard.querySelector('p');
    projectContent.classList.toggle('hidden');
    projectCard.classList.toggle('expanded');

    if (projectCard.classList.contains('expanded')) {
        projectCard.classList.add('shadow-xl', 'transform', 'scale-105');
    } else {
        projectCard.classList.remove('shadow-xl', 'transform', 'scale-105');
    }
}


const tooltipData = {
    "공증": "어떠한 사실관계나 법률관계를 공적으로 증명하는 행위",
    "5가지 공증 방법": "자필증서, 녹음, 공정증서, 비밀증서, 구수증서",
    "20%": "15주 수업 중 5주차때 갈등이 생겼지만, 오히려 3주를 앞당겨 12주차에 마무리함",
    "50%": "기존 10초 이상 걸리던 것을 5초 이내로 줄임",
    "STT": "사람의 말을 텍스트로 변환함",
    "TTS": "텍스트를 음성으로 변환하여 들려줌",
    "N+1 문제": "ORM에서 발생하는 성능 저하 문제"
};

document.querySelectorAll('.tooltip').forEach(function (tooltip) {
    const key = tooltip.getAttribute('data-key');
    
    tooltip.addEventListener('mouseenter', function () {
        const tooltipText = tooltipData[key];
        const tooltipElement = document.createElement('div');
        tooltipElement.classList.add('tooltip-box');
        tooltipElement.textContent = tooltipText;
        tooltip.appendChild(tooltipElement);
        
        // 위치 조정 (화면 밖으로 나가지 않도록)
        const tooltipRect = tooltipElement.getBoundingClientRect();
        if (tooltipRect.right > window.innerWidth) {
            tooltipElement.style.left = 'auto';
            tooltipElement.style.right = '0';
        }
        
        setTimeout(function () {
            tooltipElement.style.opacity = '1';
            tooltipElement.style.visibility = 'visible';
        }, 100);
    });
    
    tooltip.addEventListener('mouseleave', function () {
        const tooltipElement = tooltip.querySelector('.tooltip-box');
        if (tooltipElement) {
            tooltipElement.style.opacity = '0';
            tooltipElement.style.visibility = 'hidden';
            setTimeout(function () {
                tooltipElement.remove();
            }, 300);
        }
    });
});
