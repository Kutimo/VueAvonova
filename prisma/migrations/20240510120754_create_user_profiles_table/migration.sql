CREATE TABLE "public"."user_profiles" (
    "name" TEXT NOT NULL
);

CREATE UNIQUE INDEX "user_profiles_name_key" ON "public"."user_profiles"("name");