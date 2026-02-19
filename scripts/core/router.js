import renderIdentity from "../views/identity.view.js";
import renderLifecycle from "../views/lifecycle.view.js";
import renderDeliverables from "../views/deliverables.view.js";
import renderJudging from "../views/judging.view.js";
import renderAntiAI from "../views/anti-ai.view.js";
import renderWorkshops from "../views/workshops.view.js";
import renderMiniEvents from "../views/mini-events.view.js";
import renderCommunication from "../views/communication.view.js";
import renderRisk from "../views/risk.view.js";
import renderInstitution from "../views/institution.view.js";
import renderHosts from "../views/hosts.view.js";
import renderRegister from "../views/register.view.js";

const routes = {
  identity: renderIdentity,
  lifecycle: renderLifecycle,
  deliverables: renderDeliverables,
  judging: renderJudging,
  "anti-ai": renderAntiAI,
  workshops: renderWorkshops,
  "mini-events": renderMiniEvents,
  communication: renderCommunication,
  risk: renderRisk,
  institution: renderInstitution,
  hosts: renderHosts,
  register: renderRegister
};

let currentRoute = null;

function setActiveLink(route) {
  document.querySelectorAll(".sidebar__item").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.route === route);
  });
}

function render(route) {
  if (!routes[route]) return;
  if (currentRoute === route) return;

  const root = document.getElementById("view-root");
  if (!root) return;

  const wrapper = document.createElement("div");
  wrapper.className = "view-transition";
  wrapper.innerHTML = routes[route]();

  root.innerHTML = "";
  root.appendChild(wrapper);

  requestAnimationFrame(() => {
    wrapper.classList.add("is-active");
  });

  setActiveLink(route);
  currentRoute = route;
}

function navigate(route) {
  if (!routes[route]) return;

  const currentHash = window.location.hash.replace("#", "");

  if (currentHash === route) {
    render(route);
    return;
  }

  window.location.hash = route;
}

function handleClick(e) {
  const btn = e.target.closest("[data-route]");
  if (!btn) return;

  navigate(btn.dataset.route);
}

function handleHash() {
  const route = window.location.hash.replace("#", "");
  if (routes[route]) render(route);
}

export default function initRouter() {
  document.addEventListener("click", handleClick);
  window.addEventListener("hashchange", handleHash);

  const initialRoute =
    window.location.hash.replace("#", "") || "identity";

  render(initialRoute);
}