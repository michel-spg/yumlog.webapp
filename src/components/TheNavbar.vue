<template>
    <nav class="navbar navbar-expand-sm bg-miami-vice justify-content-center w-100" data-bs-theme="dark">
        <div class="container">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <RouterLink class="nav-link fs-4" to="/">Home</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link fs-4" to="/recipes">Rezepte</RouterLink>
                </li>
            </ul>
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <RouterLink class="nav-link fs-4" to="/signup">Register</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link fs-4" to="/signin">Login</RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>