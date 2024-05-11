
ALTER TABLE "public"."user_profiles" ADD COLUMN     "user_id" UUID NOT NULL;

CREATE UNIQUE INDEX "user_profiles_user_id_key" ON "public"."user_profiles"("user_id");

ALTER TABLE "public"."user_profiles" ADD CONSTRAINT "user_profiles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

ALTER TABLE "public"."user_profiles" ENABLE ROW LEVEL SECURITY;
CREATE Policy "individual_authorized_user_profile_access"
    on user_profiles for select
    using (auth.uid() = user_id);