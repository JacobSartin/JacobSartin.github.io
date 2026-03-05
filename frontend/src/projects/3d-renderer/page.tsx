import ProjectTemplate from "@/components/ProjectTemplate";

export default function RendererPage() {
  return (
    <ProjectTemplate title="3D Renderer" subtitle="A lightweight renderer">
      <p>
        This project explores rendering pipelines, triangle rasterization,
        simple shading, and interactive controls. It started as a small
        experiment and grew into a compact learning renderer.
      </p>

      <h2 style={{ marginTop: 20 }}>Features</h2>
      <ul>
        <li>Mesh loading (OBJ)</li>
        <li>Software rasterizer and depth buffer</li>
        <li>Basic Phong-esque shading</li>
        <li>Camera controls and UI toggles</li>
      </ul>
    </ProjectTemplate>
  );
}
