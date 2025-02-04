package com.linkedin.metadata.graph;

import com.linkedin.common.EntityRelationships;
import com.linkedin.metadata.query.filter.RelationshipDirection;
import java.util.List;
import javax.annotation.Nonnull;
import javax.annotation.Nullable;


public interface GraphClient {
  public static final Integer DEFAULT_PAGE_SIZE = 100;

  /**
   * Returns a list of related entities for a given entity, set of edge types, and direction relative to the
   * source node
   * @return
   */
  @Nonnull
  EntityRelationships getRelatedEntities(
      String rawUrn,
      List<String> relationshipTypes,
      RelationshipDirection direction,
      @Nullable Integer start,
      @Nullable Integer count,
      String actor);
}
