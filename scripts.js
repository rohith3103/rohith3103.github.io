document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const themeToggle = document.getElementById("theme-toggle");
    const toggleText = themeToggle?.querySelector(".toggle-text");
    const menuToggle = document.getElementById("menu-toggle");
    const siteNav = document.getElementById("site-nav");
    const progressBar = document.getElementById("scroll-progress");
    const revealItems = document.querySelectorAll("[data-reveal]");
    const magneticItems = document.querySelectorAll(".magnetic");
    const tiltCards = document.querySelectorAll(".card-tilt");
    const cursorGlow = document.getElementById("cursor-glow");
    const aiOrb = document.getElementById("ai-orb");
    const miniDev = document.getElementById("mini-dev");
    const miniHead = document.getElementById("mini-head");
    const miniEyes = document.querySelectorAll(".mini-eye");
    const miniSecret = document.getElementById("mini-secret");
    const miniClickBurst = document.getElementById("mini-click-burst");
    const expandButtons = document.querySelectorAll(".expand-toggle");
    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("form-status");
    const githubStats = document.getElementById("github-stats");
    const repoList = document.getElementById("repo-list");
    const canvas = document.getElementById("ai-network");
    const recruiterModeToggle = document.getElementById("recruiter-mode-toggle");
    const assistantToggle = document.getElementById("assistant-toggle");
    const assistantPanel = document.getElementById("assistant-panel");
    const assistantAnswer = document.getElementById("assistant-answer");
    const assistantQuestions = document.querySelectorAll(".assistant-question");
    const resumePreviewButtons = document.querySelectorAll("#resume-preview-button, .resume-preview-trigger");
    const resumeModal = document.getElementById("resume-modal");
    const resumeBackdrop = document.getElementById("resume-backdrop");
    const resumeClose = document.getElementById("resume-close");
    const projectModal = document.getElementById("project-modal");
    const projectBackdrop = document.getElementById("project-backdrop");
    const projectClose = document.getElementById("project-close");
    const projectModalTitle = document.getElementById("project-modal-title");
    const projectModalGrid = document.getElementById("project-modal-grid");
    const projectButtons = document.querySelectorAll(".project-open");
    const hireMoment = document.getElementById("hire-moment");
    const timelineMeter = document.getElementById("timeline-meter");
    const activityLog = document.getElementById("activity-log");
    const radarNodes = document.querySelectorAll(".radar-node");
    const skillDetailTitle = document.getElementById("skill-detail-title");
    const skillDetailText = document.getElementById("skill-detail-text");
    const interactiveTargets = document.querySelectorAll("a, button, .radar-node, .contact-link-card, .card-tilt");
    const recruiterFocusLinks = document.querySelectorAll("#recruiter-focus-nav a");

    const assistantReplies = {
        what: "Rohith works across AI, ML, and DevOps with current hands-on work in automation, CI/CD, cloud workflows, and machine learning projects.",
        skills: "Key areas include Python, Java, C, JavaScript, Machine Learning, Ansible, Jenkins, Bamboo, AWS concepts, Linux, Git workflows, JIRA, Matplotlib, Seaborn, and Tableau.",
        hire: "He combines current DevOps internship work at Majesco with AI and ML project depth, including DeepFake detection, sign language, and medical imaging projects."
    };

    const projectDetails = {
        deepfake: {
            summary: "DeepFake Detection System focused on identifying manipulated media with a multi-modal CNN + LSTM pipeline.",
            metrics: ["92.5% accuracy", "CNN + LSTM", "Multi-modal"],
            stack: ["DeepFake Detection", "CNN", "LSTM"],
            stages: [
                { title: "Problem", text: "Detect manipulated media accurately." },
                { title: "Approach", text: "Multi-modal system using CNN + LSTM architecture." },
                { title: "Challenge", text: "Handling complex media patterns across model stages." },
                { title: "Outcome", text: "92.5% accuracy." }
            ],
            cards: [
                { label: "Why It Matters", value: "Reliable detection is important when synthetic media quality keeps improving." },
                { label: "Model Direction", value: "CNN + LSTM combination helps separate spatial and sequence-level patterns." },
                { label: "Result", value: "Presented here with the reported 92.5% accuracy." }
            ]
        },
        sign: {
            summary: "Sign Language System centered on improving communication through sign language understanding.",
            metrics: ["Ongoing", "Recognition System", "AI / ML"],
            stack: ["Sign Language", "AI / ML", "Recognition"],
            stages: [
                { title: "Problem", text: "Improve communication through sign language understanding." },
                { title: "Approach", text: "Ongoing AI / ML system development." },
                { title: "Current State", text: "Project work is still in progress." },
                { title: "Outcome", text: "In progress." }
            ],
            cards: [
                { label: "Focus", value: "Building an interpretable system around sign language recognition." },
                { label: "Work Mode", value: "Still under active development and refinement." },
                { label: "Status", value: "Ongoing project." }
            ]
        },
        medical: {
            summary: "Medical Imaging Project aimed at supporting analysis in imaging workflows.",
            metrics: ["Medical Imaging", "AI / ML", "Analysis Workflow"],
            stack: ["Medical Imaging", "AI / ML", "Analysis"],
            stages: [
                { title: "Problem", text: "Support analysis in medical imaging workflows." },
                { title: "Approach", text: "Imaging-oriented AI / ML project development." },
                { title: "Project Scope", text: "Work centered on medical-imaging-focused model exploration." },
                { title: "Outcome", text: "Project experience in medical imaging." }
            ],
            cards: [
                { label: "Domain", value: "Medical imaging." },
                { label: "Workflow", value: "AI / ML project workflow applied to imaging analysis." },
                { label: "Outcome", value: "Hands-on project experience in the space." }
            ]
        }
    };

    const storedTheme = localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const applyTheme = (theme) => {
        const isDark = theme === "dark";
        body.classList.toggle("dark-mode", isDark);
        if (toggleText) {
            toggleText.textContent = isDark ? "Light" : "Dark";
        }
        localStorage.setItem("portfolio-theme", theme);
    };

    applyTheme(storedTheme || (prefersDark ? "dark" : "light"));

    themeToggle?.addEventListener("click", () => {
        body.classList.add("theme-transition");
        applyTheme(body.classList.contains("dark-mode") ? "light" : "dark");
        window.setTimeout(() => body.classList.remove("theme-transition"), 650);
    });

    menuToggle?.addEventListener("click", () => {
        const open = siteNav?.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", String(Boolean(open)));
    });

    siteNav?.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            siteNav.classList.remove("is-open");
            menuToggle?.setAttribute("aria-expanded", "false");
        });
    });

    recruiterModeToggle?.addEventListener("click", () => {
        const active = body.classList.toggle("recruiter-mode");
        recruiterModeToggle.setAttribute("aria-pressed", String(active));
        recruiterModeToggle.textContent = active ? "Exit Recruiter Mode" : "Recruiter Mode";
        if (active) {
            document.getElementById("experience")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });

    assistantToggle?.addEventListener("click", () => {
        const expanded = assistantToggle.getAttribute("aria-expanded") === "true";
        assistantToggle.setAttribute("aria-expanded", String(!expanded));
        assistantPanel.hidden = expanded;
    });

    assistantQuestions.forEach((button) => {
        button.addEventListener("click", () => {
            assistantAnswer.textContent = assistantReplies[button.dataset.answer] || "No answer available.";
        });
    });

    const openResumeModal = () => {
        resumeModal.hidden = false;
        body.classList.add("modal-open");
    };

    const closeResumeModal = () => {
        resumeModal.hidden = true;
        body.classList.remove("modal-open");
    };

    resumePreviewButtons.forEach((button) => {
        button.addEventListener("click", openResumeModal);
    });
    resumeClose?.addEventListener("click", closeResumeModal);
    resumeBackdrop?.addEventListener("click", closeResumeModal);

    const openProjectModal = (projectKey, title) => {
        const details = projectDetails[projectKey];
        if (!details) {
            return;
        }
        projectModalTitle.textContent = title;
        projectModalGrid.innerHTML = `
            <section class="project-modal-overview">
                <article class="project-summary">
                    <p>${details.summary}</p>
                    <div class="project-metrics">
                        ${details.metrics.map((metric) => `<span class="project-metric">${metric}</span>`).join("")}
                    </div>
                    <div class="project-stack">
                        ${details.stack.map((item) => `<span>${item}</span>`).join("")}
                    </div>
                </article>
                <div class="project-stage-track">
                    ${details.stages.map((stage) => `
                        <article class="project-stage">
                            <strong>${stage.title}</strong>
                            <p>${stage.text}</p>
                        </article>
                    `).join("")}
                </div>
                <div class="project-modal-grid">
                    ${details.cards.map((item) => `
                        <article class="project-modal-card">
                            <h4>${item.label}</h4>
                            <p>${item.value}</p>
                        </article>
                    `).join("")}
                </div>
            </section>
        `;
        projectModal.hidden = false;
        body.classList.add("modal-open");
    };

    const closeProjectModal = () => {
        projectModal.hidden = true;
        body.classList.remove("modal-open");
    };

    projectButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const card = button.closest(".project-launch");
            const title = card?.querySelector("h3")?.textContent || "Project";
            openProjectModal(card?.dataset.project || "", title);
        });
    });

    projectClose?.addEventListener("click", closeProjectModal);
    projectBackdrop?.addEventListener("click", closeProjectModal);

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.16 });

    revealItems.forEach((item) => revealObserver.observe(item));

    const updateProgress = () => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const percent = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
        if (progressBar) {
            progressBar.style.width = `${percent}%`;
        }
        body.classList.toggle("is-scrolled", window.scrollY > 120);

        if (timelineMeter) {
            const experienceSection = document.getElementById("experience");
            if (experienceSection) {
                const rect = experienceSection.getBoundingClientRect();
                const visible = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / (rect.height + window.innerHeight * 0.2)));
                timelineMeter.style.transform = `scaleY(${visible})`;
            }
        }

        if (hireMoment) {
            const rect = hireMoment.getBoundingClientRect();
            hireMoment.classList.toggle("is-active", rect.top < window.innerHeight * 0.82);
        }

        document.querySelectorAll(".section").forEach((section) => {
            const rect = section.getBoundingClientRect();
            const visible = rect.top < window.innerHeight * 0.7 && rect.bottom > window.innerHeight * 0.3;
            section.classList.toggle("section-active", visible);
        });

        recruiterFocusLinks.forEach((link) => {
            const target = document.querySelector(link.getAttribute("href"));
            if (!target) {
                return;
            }
            const rect = target.getBoundingClientRect();
            const active = rect.top < window.innerHeight * 0.45 && rect.bottom > window.innerHeight * 0.28;
            link.classList.toggle("is-active", active);
        });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    if (cursorGlow && window.matchMedia("(pointer:fine)").matches) {
        document.addEventListener("mousemove", (event) => {
            cursorGlow.style.opacity = "1";
            cursorGlow.style.left = `${event.clientX}px`;
            cursorGlow.style.top = `${event.clientY}px`;
        });

        interactiveTargets.forEach((target) => {
            target.addEventListener("mouseenter", () => {
                cursorGlow.classList.add("interactive-hover");
            });
            target.addEventListener("mouseleave", () => {
                cursorGlow.classList.remove("interactive-hover");
            });
        });
    }

    if (aiOrb) {
        document.addEventListener("mousemove", (event) => {
            const x = (event.clientX / window.innerWidth - 0.5) * 18;
            const y = (event.clientY / window.innerHeight - 0.5) * 18;
            aiOrb.style.transform = `translate(${x}px, ${y}px)`;
        });
    }

    let miniClicks = 0;
    let secretTimer = null;

    if (miniDev && miniHead && miniEyes.length) {
        miniDev.addEventListener("mousemove", (event) => {
            const rect = miniDev.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width - 0.5) * 12;
            const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10;
            miniHead.style.transform = `translate(${x * 0.18}px, ${y * 0.14}px) rotate(${x * 0.4}deg)`;
            miniEyes.forEach((eye) => {
                eye.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
            });
        });

        miniDev.addEventListener("mouseenter", () => {
            secretTimer = window.setTimeout(() => {
                miniSecret?.classList.add("is-visible");
            }, 2200);
        });

        miniDev.addEventListener("mouseleave", () => {
            miniHead.style.transform = "";
            miniEyes.forEach((eye) => {
                eye.style.transform = "";
            });
            miniSecret?.classList.remove("is-visible");
            if (secretTimer) {
                window.clearTimeout(secretTimer);
                secretTimer = null;
            }
        });

        miniDev.addEventListener("click", () => {
            miniClicks += 1;
            miniDev.classList.add("is-reacting");
            window.setTimeout(() => miniDev.classList.remove("is-reacting"), 400);
            if (miniClicks >= 3) {
                miniClickBurst?.classList.add("is-visible");
                miniClicks = 0;
                window.setTimeout(() => miniClickBurst?.classList.remove("is-visible"), 2000);
            }
        });
    }

    const updateSkillPanel = (node) => {
        if (!node || !skillDetailTitle || !skillDetailText) {
            return;
        }
        radarNodes.forEach((item) => item.classList.remove("is-active"));
        node.classList.add("is-active");
        skillDetailTitle.textContent = node.dataset.skill || node.textContent || "Skill";
        skillDetailText.textContent = node.dataset.detail || "";
    };

    radarNodes.forEach((node) => {
        node.addEventListener("mouseenter", () => updateSkillPanel(node));
        node.addEventListener("focus", () => updateSkillPanel(node));
        node.addEventListener("click", () => updateSkillPanel(node));
        node.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                updateSkillPanel(node);
            }
        });
    });

    if (radarNodes.length) {
        updateSkillPanel(radarNodes[0]);
    }

    magneticItems.forEach((item) => {
        item.addEventListener("mousemove", (event) => {
            const rect = item.getBoundingClientRect();
            const x = event.clientX - rect.left - rect.width / 2;
            const y = event.clientY - rect.top - rect.height / 2;
            item.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
        });

        item.addEventListener("mouseleave", () => {
            item.style.transform = "translate(0, 0)";
        });

        item.addEventListener("click", (event) => {
            if (!item.classList.contains("button")) {
                return;
            }
            const rect = item.getBoundingClientRect();
            item.style.setProperty("--ripple-x", `${event.clientX - rect.left}px`);
            item.style.setProperty("--ripple-y", `${event.clientY - rect.top}px`);
            item.classList.remove("is-rippling");
            window.requestAnimationFrame(() => item.classList.add("is-rippling"));
            window.setTimeout(() => item.classList.remove("is-rippling"), 650);
        });
    });

    tiltCards.forEach((card) => {
        card.addEventListener("mousemove", (event) => {
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const rotateX = ((y / rect.height) - 0.5) * -8;
            const rotateY = ((x / rect.width) - 0.5) * 8;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        });
    });

    expandButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const card = button.closest(".experience-card");
            const expanded = card?.classList.toggle("is-expanded");
            button.setAttribute("aria-expanded", String(Boolean(expanded)));
        });
    });

    if (activityLog) {
        const activityLines = [
            "Currently working on DevOps pipelines...",
            "Training AI models...",
            "Exploring new tech...",
            "Improving automation workflows...",
            "Reviewing cloud delivery steps..."
        ];
        let index = 0;
        window.setInterval(() => {
            const line = document.createElement("div");
            line.className = "log-line";
            line.textContent = activityLines[index % activityLines.length];
            activityLog.prepend(line);
            const lines = activityLog.querySelectorAll(".log-line");
            if (lines.length > 5) {
                lines[lines.length - 1].remove();
            }
            index += 1;
        }, 2300);
    }

    contactForm?.addEventListener("submit", async (event) => {
        event.preventDefault();
        const submitButton = contactForm.querySelector("button[type='submit']");
        const formData = new FormData(contactForm);
        const name = String(formData.get("name") || "").trim();
        const email = String(formData.get("email") || "").trim();
        const message = String(formData.get("message") || "").trim();
        const isStaticHost = window.location.protocol === "file:" || window.location.hostname.endsWith("github.io");

        if (submitButton) {
            submitButton.disabled = true;
        }
        if (formStatus) {
            formStatus.textContent = "Sending your message...";
            formStatus.classList.remove("is-success", "is-error");
        }

        if (isStaticHost) {
            const subject = encodeURIComponent(`Portfolio inquiry from ${name || "Website Visitor"}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            window.location.href = `mailto:rohithreddy3103@gmail.com?subject=${subject}&body=${body}`;
            if (formStatus) {
                formStatus.textContent = "Opening your email app for direct contact.";
                formStatus.classList.add("is-success");
            }
            if (submitButton) {
                submitButton.disabled = false;
            }
            return;
        }

        try {
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                }
            });

            const contentType = response.headers.get("content-type") || "";
            const data = contentType.includes("application/json")
                ? await response.json()
                : { status: response.ok ? "success" : "error" };

            if (response.ok && data.status === "success") {
                contactForm.reset();
                formStatus.textContent = "Message sent successfully.";
                formStatus.classList.add("is-success");
                formStatus.classList.remove("is-error");
            } else {
                throw new Error("Form submission failed.");
            }
        } catch (error) {
            formStatus.textContent = "Contact form is unavailable right now. Please use email or LinkedIn.";
            formStatus.classList.remove("is-success");
            formStatus.classList.add("is-error");
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
            }
        }
    });

    const renderGitHubStats = (data) => {
        if (!githubStats) {
            return;
        }
        githubStats.innerHTML = `
            <article class="stat-card">
                <span>Public Repos</span>
                <strong>${data.public_repos ?? "-"}</strong>
            </article>
            <article class="stat-card">
                <span>Followers</span>
                <strong>${data.followers ?? "-"}</strong>
            </article>
            <article class="stat-card">
                <span>Following</span>
                <strong>${data.following ?? "-"}</strong>
            </article>
        `;
    };

    const renderRepos = (repos) => {
        if (!repoList) {
            return;
        }
        repoList.innerHTML = repos.slice(0, 3).map((repo) => `
            <article class="repo-item">
                <h3>${repo.name}</h3>
                <p>${repo.description || "Public repository from the GitHub profile."}</p>
                <div class="repo-meta">
                    <span>Language: ${repo.language || "Mixed"}</span>
                    <span>Stars: ${repo.stargazers_count}</span>
                    <a href="${repo.html_url}" target="_blank" rel="noreferrer">Open Repo</a>
                </div>
            </article>
        `).join("");
    };

    const renderFallback = () => {
        if (githubStats) {
            githubStats.innerHTML = `
                <article class="stat-card"><span>GitHub</span><strong>rohith3103</strong></article>
                <article class="stat-card"><span>Featured Repo</span><strong>DeepFake</strong></article>
                <article class="stat-card"><span>Profile</span><strong>Public</strong></article>
            `;
        }
        if (repoList) {
            repoList.innerHTML = `
                <article class="repo-item">
                    <h3>DeepFake</h3>
                    <p>Repository linked from the resume-backed project list.</p>
                    <div class="repo-meta">
                        <a href="https://github.com/rohith3103/DeepFake.git" target="_blank" rel="noreferrer">Open Repo</a>
                    </div>
                </article>
            `;
        }
    };

    const loadGitHubData = async () => {
        try {
            const [userResponse, repoResponse] = await Promise.all([
                fetch("https://api.github.com/users/rohith3103"),
                fetch("https://api.github.com/users/rohith3103/repos?sort=updated&per_page=6")
            ]);
            if (!userResponse.ok || !repoResponse.ok) {
                throw new Error("GitHub fetch failed");
            }
            const [userData, repoData] = await Promise.all([
                userResponse.json(),
                repoResponse.json()
            ]);
            renderGitHubStats(userData);
            renderRepos(repoData);
        } catch (error) {
            renderFallback();
        }
    };

    loadGitHubData();

    if (canvas) {
        const context = canvas.getContext("2d");
        const points = [];
        const pointCount = 72;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createPoints = () => {
            points.length = 0;
            for (let i = 0; i < pointCount; i += 1) {
                points.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.56,
                    vy: (Math.random() - 0.5) * 0.56,
                    size: Math.random() > 0.7 ? 2.4 : 1.7
                });
            }
        };

        const draw = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            const isDark = body.classList.contains("dark-mode");
            const pointColor = isDark ? "rgba(84,224,255,0.82)" : "rgba(93,114,255,0.72)";
            const lineColor = isDark ? "rgba(129,152,255,0.18)" : "rgba(93,114,255,0.14)";

            points.forEach((point) => {
                point.x += point.vx;
                point.y += point.vy;
                if (point.x <= 0 || point.x >= canvas.width) point.vx *= -1;
                if (point.y <= 0 || point.y >= canvas.height) point.vy *= -1;

                context.beginPath();
                context.arc(point.x, point.y, point.size, 0, Math.PI * 2);
                context.fillStyle = pointColor;
                context.fill();
            });

            for (let i = 0; i < points.length; i += 1) {
                for (let j = i + 1; j < points.length; j += 1) {
                    const a = points[i];
                    const b = points[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 160) {
                        context.beginPath();
                        context.moveTo(a.x, a.y);
                        context.lineTo(b.x, b.y);
                        context.strokeStyle = lineColor;
                        context.lineWidth = 1;
                        context.stroke();
                    }
                }
            }

            requestAnimationFrame(draw);
        };

        resizeCanvas();
        createPoints();
        draw();
        window.addEventListener("resize", () => {
            resizeCanvas();
            createPoints();
        });
    }
});
